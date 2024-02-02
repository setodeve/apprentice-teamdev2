class Api::UserController < ApplicationController
  before_action :set_current_user, only: [:show, :update]

  def index
    @users = User.all
    render json: @users
  end

  def show 
    render json: @user
  end





  private 
  def set_current_user 
    @user = User.find(params[:id])
  end
end
