class Otyakai < ApplicationRecord
  has_many :participants, dependent: :destroy
  belongs_to :user, foreign_key: :host_id
  has_many :users, through: :participants

  def change_json()
      # 日時を文字列から日時の型に変換
      self.date = self.date.to_date
      # hostを追加
      return self.as_json.merge({
        host: self.user.name
      })
  end
end