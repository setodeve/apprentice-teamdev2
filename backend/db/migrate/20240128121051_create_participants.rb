class CreateParticipants < ActiveRecord::Migration[7.0]
  def change
    create_table :participants do |t|
      t.bigint :participant_id, index: true
      t.bigint :otyakai_id, index: true

      t.timestamps
    end
    add_foreign_key :participants, :users, column: :participant_id
    add_foreign_key :participants, :otyakais, column: :otyakai_id
  end
end
