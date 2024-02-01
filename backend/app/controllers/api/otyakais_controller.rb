class Api::OtyakaisController < ApplicationController
  before_action :set_otyakai, only: [:show, :update, :destroy]

  def index
    @otyakais = Otyakai.eager_load(:user)
    otyakaiList = []
    @otyakais.each do |o| 
      # 日時を文字列から日時の型に変換
      o.date = o.date.to_date
      # hostを追加
      otyakaiList << o.as_json.merge({
        host: o.user.name
      })
    end
    render json: otyakaiList
  end

  def show
    render json: @otyakai
  end

  def create
    @otyakai = Otyakai.new(otyakai_params)
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
end
