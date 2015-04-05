class Notation < ActiveRecord::Base
  has_many :channels, dependent: :destroy
  has_many :notes, through: :channels, dependent: :destroy
  belongs_to :score

  accepts_nested_attributes_for :channels
  accepts_nested_attributes_for :notes
end
