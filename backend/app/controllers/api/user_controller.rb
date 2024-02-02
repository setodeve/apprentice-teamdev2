class Api::UserController < ApplicationController
  before_action :set_current_user, only: [:show, :update]

  def index
    render json: {test: "hello world"}
  end

  def show 
    render json: @current_user
  end





  private 
  def set_current_user 
    @current_user = User.find(params[:id])
  end
end
