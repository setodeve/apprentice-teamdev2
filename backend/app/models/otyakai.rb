class Otyakai < ApplicationRecord
  has_many :participants, dependent: :destroy
  belongs_to :user, foreign_key: :host_id
  has_many :users, through: :participants
end