class CreateSamples < ActiveRecord::Migration
  def change
    create_table :samples do |t|
      t.string :name
      t.string :url
      t.integer :kit_id


      t.timestamps null: false
    end
  end
end
