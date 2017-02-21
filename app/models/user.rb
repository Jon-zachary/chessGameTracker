class User < ApplicationRecord
  has_many :games, dependant: :destroy
end
