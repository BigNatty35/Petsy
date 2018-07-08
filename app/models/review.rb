class Review < ApplicationRecord
  validates :product_id, :author_id, :rating, :body, :author_name, presence: true

  belongs_to :product

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end