class User < ApplicationRecord
  has_many :participants, dependent: :destroy
  has_many :otyakais, through: :participants
end