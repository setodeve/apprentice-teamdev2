class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password, null: false
      t.string :name, null: false
      t.text :profile
      t.bigint :gender
      t.bigint :age
      t.string :img, null: false

      t.timestamps
    end
  end
end
