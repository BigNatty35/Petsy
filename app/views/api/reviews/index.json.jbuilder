@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :author_id, :product_id, :rating
    json.user_name review.user_name
  end
end




# @cart_items.each do |cart_item|
#   json.set! cart_item.id do 
#   json.extract! cart_item, :id, :user_id, :product_img, :product_id, :quantity
#   json.product_name cart_item.product.title
#   json.price cart_item.product.price
#   end
# end