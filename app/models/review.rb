class Review < ApplicationRecord
  validates :product_id, :author_id, :rating, :body, presence: true

  belongs_to :product

  belongs_to :user
  primary_key :id
  foreign_key :author_id
  
end