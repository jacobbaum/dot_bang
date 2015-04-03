class Score < ActiveRecord::Base
  has_one :kit
  has_one :notation
end
