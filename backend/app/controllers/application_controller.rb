class ApplicationController < ActionController::API
  before_action :set_current_user


  def set_current_user
    current_user_id = 1
    @current_user = User.find_by(id: current_user_id)
  end
end
