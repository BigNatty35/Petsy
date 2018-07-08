@reviews.each do |review|
  json.set! review.id do 
  json.extract! review, :id, :user_id, :product_img, :product_id, :quantity
  json.product_name review.product.title
  json.price review.product.price
  end
end