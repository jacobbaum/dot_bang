class Channel < ActiveRecord::Base
  belongs_to :notation
  has_many :notes, dependent: :destroy
end
