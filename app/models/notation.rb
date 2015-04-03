class Notation < ActiveRecord::Base
  has_many :channels, dependent: :destroy
  has_many :notes, through: :channels, dependent: :destroy
  belongs_to :score
end
