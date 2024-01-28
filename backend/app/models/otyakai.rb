class Otyakai < ApplicationRecord
  belongs_to :user, foreign_key: :host_id
  has_many :participants, dependent: :destroy, foreign_key: 'otyakai_id'
  has_many :users, through: :participants
end