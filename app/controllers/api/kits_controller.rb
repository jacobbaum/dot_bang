class Api::KitsController < ApplicationController
  before_action :set_kit, only: [:show, :update, :destroy]

  # GET /kits
  # GET /kits.json
  def index
    @kits = Kit.all

    render json: @kits
  end

  # GET /kits/1
  # GET /kits/1.json
  def show
    render json: @kit, include: :samples
    # render json: @notation, include: { channels: { include: :notes }}
  end

  # POST /kits
  # POST /kits.json
  def create
    @kit = Kit.new(kit_params)

    if @kit.save
      render json: @kit, status: :created, location: @kit
    else
      render json: @kit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /kits/1
  # PATCH/PUT /kits/1.json
  def update
    @kit = Kit.find(params[:id])

    if @kit.update(kit_params)
      head :no_content
    else
      render json: @kit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /kits/1
  # DELETE /kits/1.json
  def destroy
    @kit.destroy

    head :no_content
  end

  private

    def set_kit
      @kit = Kit.find(params[:id])
    end

    def kit_params
      params.require(:kit).permit(:name)
    end
end
