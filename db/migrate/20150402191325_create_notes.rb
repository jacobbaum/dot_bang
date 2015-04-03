class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :time
      t.string :value
      t.integer :channel_id

      t.timestamps null: false
    end
  end
end
