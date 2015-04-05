class RemoveTimeStampsFromNotesChannelsSamples < ActiveRecord::Migration
  def change
    remove_timestamps :notes
    remove_timestamps :channels
  end
end
