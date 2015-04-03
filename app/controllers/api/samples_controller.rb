class Api::SamplesController < ApplicationController
  before_action :set_sample, only: [:show, :update, :destroy]

  # GET /samples
  # GET /samples.json
  def index
    @samples = Sample.all

    render json: @samples
  end

  # GET /samples/1
  # GET /samples/1.json
  def show
    render json: @sample
  end

  # POST /samples
  # POST /samples.json
  def create
    @sample = Sample.new(sample_params)

    if @sample.save
      render json: @sample, status: :created, location: @sample
    else
      render json: @sample.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /samples/1
  # PATCH/PUT /samples/1.json
  def update
    @sample = Sample.find(params[:id])

    if @sample.update(sample_params)
      head :no_content
    else
      render json: @sample.errors, status: :unprocessable_entity
    end
  end

  # DELETE /samples/1
  # DELETE /samples/1.json
  def destroy
    @sample.destroy

    head :no_content
  end

  private

    def set_sample
      @sample = Sample.find(params[:id])
    end

    def sample_params
      params.require(:sample).permit(:name, :url)
    end
end
