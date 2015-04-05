class Channel < ActiveRecord::Base
  belongs_to :notation
  has_many :notes, -> { order "time ASC" }, dependent: :destroy
end
