class Kit < ActiveRecord::Base
  has_many :samples
  belongs_to :score
end
