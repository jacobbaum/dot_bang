class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.integer :number
      t.integer :notation_id

      t.timestamps null: false
    end
  end
end
