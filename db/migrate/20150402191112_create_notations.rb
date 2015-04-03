class CreateNotations < ActiveRecord::Migration
  def change
    create_table :notations do |t|
      t.string :name
      t.integer :time_signature
      t.integer :bpm

      t.timestamps null: false
    end
  end
end
