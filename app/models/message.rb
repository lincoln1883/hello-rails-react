class Message < ApplicationRecord
  scope :random, -> { order('RANDOM()').first }
end
