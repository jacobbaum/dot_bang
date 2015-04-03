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
    render json: 
      { notation: @notation, 
        channels: notes_by_channel
      } 
  end

  # POST /notations
  # POST /notations.json
  def create
    @notation = Notation.new(notation_params)

    if @notation.save
      render json: @notation, status: :created, location: @notation
    else
      render json: @notation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notations/1
  # PATCH/PUT /notations/1.json
  def update
    @notation = Notation.find(params[:id])

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

    def notation_params
      params.require(:notation).permit(:name, :time_signature, :bpm)
    end

    def notes_by_channel
      @notation.channels.map do |channel|
        {number: channel.number, notes: channel.notes}
      end
    end

end
