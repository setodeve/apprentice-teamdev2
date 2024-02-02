class CreateOtyakis < ActiveRecord::Migration[7.0]
  def change
    create_table :otyakais do |t|
      t.string :name
      t.text :detail
      t.datetime :date
      t.string :place
      t.string :img
      t.bigint :host_id, index: true
      t.bigint :max_participants

      t.timestamps
    end
    add_foreign_key :otyakais, :users, column: :host_id

  end
end
