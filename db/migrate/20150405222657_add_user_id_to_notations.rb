class AddUserIdToNotations < ActiveRecord::Migration
  def change
    add_column :notations, :user_id, :integer
  end
end
