class Api::NotationsController < ApplicationController
  before_action :set_notation, only: [:show, :update, :destroy]

  # GET /notations
  # GET /notations.json
  def index
    @notations = Notation.all
    render json: @notations
  end

  # GET /notations/1
  # GET /notations/1.json
  def show
    render json: @notation, include: { channels: { include: :notes }}
  end

  # POST /notations
  # POST /notations.json
  def create
    @notation = Notation.create(notation_params)
    params[:notation][:channels].each do |channel|
      newChan = @notation.channels.create(number: channel[:number])
      channel[:notes].each do |note|
        newChan.notes.create(time: note[:time], value: note[:value])
      end
    end

    if @notation.save
    render json: @notation, include: { channels: { include: :notes }}
    # status: :created, location: @notation
    else
      render json: @notation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notations/1
  # PATCH/PUT /notations/1.json
  def update
    # @notation = Notation.find(params[:id])

    @notation.update(notation_params)
    params[:notation][:channels].each do |channel|
      updatedChan = @notation.channels.update(channel[:id], number: channel[:number])
      channel[:notes].each do |note|
        updatedChan.notes.update(note[:id], time: note[:time], value: note[:value])
      end
    end


    if @notation.update(notation_params)
      head :no_content
    else
      render json: @notation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notations/1
  # DELETE /notations/1.json
  def destroy
    @notation.destroy

    head :no_content
  end

  private

    def set_notation
      @notation = Notation.find(params[:id])
    end

    # def notation_params
    #   params.require(:notation).permit(:name, :time_signature, :bpm)
    # end

    def notation_params
      params.require(:notation).permit(:name, :time_signature, :bpm, :user_id)
          # channels: [ :number ])
          # , notes: [ { :time, :value } ] } ])
    end

    def channel_params
      params.permit(:number)
    end

    def note_params
      params.permit(:time, :value)
    end

    # def notes_by_channel
    #   @notation.channels.map do |channel|
    #     {channel: channel, notes: channel.notes}
    #   end
    # end

end
