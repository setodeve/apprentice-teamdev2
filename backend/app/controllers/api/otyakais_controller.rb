class Api::OtyakaisController < ApplicationController
  before_action :set_otyakai, only: [:show, :update, :destroy]

  def index
    @otyakais = Otyakai.eager_load(:user)
    otyakaiList = []
    @otyakais.each do |o| 
      p o
      otyakaiList << o.change_json
    end
    render json: otyakaiList
  end

  def show
    p @otyakai
    render json: @otyakai.change_json
  end

  def create
    # p params
    @otyakai = Otyakai.new(otyakai_params)
    # p @otyakai
    if params[:img]
      blob = ActiveStorage::Blob.create_after_upload!(
        io: StringIO.new(decode(params[:img][:data]) + "\n"),
        filename: params[:img][:name]
      )
      @otyakai.img.attach(blob)
    end
    if @otyakai.save
      render json: @otyakai, status: :created
    else
      render json: @otyakai.errors, status: :unprocessable_entity
    end
  end

  def update
    if @otyakai.update(otyakai_params)
      render json: @otyakai
    else
      render json: @otyakai.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @otyakai.destroy
  end

  private
    def set_otyakai
      @otyakai = Otyakai.find(params[:id])
    end

    def otyakai_params
      params.require(:otyakai).permit(:name, :detail, :date, :place, :img, :host_id, :max_participants)
    end

    def decode(str)
      Base64.decode64(str.split(',').last)
    end
end
