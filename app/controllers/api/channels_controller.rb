class Api::ChannelsController < ApplicationController
  before_action :set_channel, only: [:show, :update, :destroy]

  # GET /channels
  # GET /channels.json
  def index
    @channels = Channel.all

    render json: @channels
  end

  # GET /channels/1
  # GET /channels/1.json
  def show
    render json: @channel
  end

  # POST /channels
  # POST /channels.json
  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render json: @channel, status: :created, location: @channel
    else
      render json: @channel.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /channels/1
  # PATCH/PUT /channels/1.json
  def update
    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      head :no_content
    else
      render json: @channel.errors, status: :unprocessable_entity
    end
  end

  # DELETE /channels/1
  # DELETE /channels/1.json
  def destroy
    @channel.destroy

    head :no_content
  end

  private

    def set_channel
      @channel = Channel.find(params[:id])
    end

    def channel_params
      params.require(:channel).permit(:number)
    end
end
