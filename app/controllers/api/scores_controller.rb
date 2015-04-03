class Api::ScoresController < ApplicationController
  before_action :set_score, only: [:show, :update, :destroy]

  # GET /scores
  # GET /scores.json
  def index
    @scores = Score.all

    render json: @scores
  end

  # GET /scores/1
  # GET /scores/1.json
  def show
    render json: @score
  end

  # POST /scores
  # POST /scores.json
  def create
    @score = Score.new(score_params)

    if @score.save
      render json: @score, status: :created, location: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /scores/1
  # PATCH/PUT /scores/1.json
  def update
    @score = Score.find(params[:id])

    if @score.update(score_params)
      head :no_content
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # DELETE /scores/1
  # DELETE /scores/1.json
  def destroy
    @score.destroy

    head :no_content
  end

  private

    def set_score
      @score = Score.find(params[:id])
    end

    def score_params
      params.require(:score).permit(:name)
    end
end
