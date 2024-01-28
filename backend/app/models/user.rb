class User < ApplicationRecord
  has_many :otyakais, foreign_key: :host_id
  has_many :participants, dependent: :destroy, foreign_key: 'participant_id'
  has_many :otyakais, through: :participants
end