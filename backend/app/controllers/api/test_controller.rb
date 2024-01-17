class Api::TestController < ApplicationController
  def index
    render json: { status: 200, message: "Hello World!:#{test_params[:name]}"}
  end

  private
    def test_params
      params.permit(:name)
    end
end
