class AddPresetToNotations < ActiveRecord::Migration
  def change
    add_column :notations, :preset, :boolean
  end
end
