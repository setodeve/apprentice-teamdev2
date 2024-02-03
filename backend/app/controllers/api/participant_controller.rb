class Api::ParticipantController < ApplicationController
  def index
    @participants = Participant.all
    render json: @participants, status: 200
  end

  def show
    @participant =  Participant.find_by(participant_params)
    if @participant
      render json: @participant, status: 200
    end
  end

  def create
    @participant =  Participant.new(participant_params)
    if @participant.save
      render json: @participant, status: 200
    else
      render status: 422
    end
  end

  def destroy
    @participant =  Participant.find_by(participant_params)
    if @participant.destroy
      render status: 200
    else
      render status: 422
    end
  end

    def participant_params
      { otyakai_id: params[:otyakai_id], user_id: params[:user_id] }
    end
end
