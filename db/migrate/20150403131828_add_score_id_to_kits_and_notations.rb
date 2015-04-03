class AddScoreIdToKitsAndNotations < ActiveRecord::Migration
  def change
    add_column :kits, :score_id, :integer
    add_column :notations, :score_id, :integer    
  end
end
