# json.product do 
#   json.extract! @product, :id, :title, :description, :user_id, :category_id, :img_url, :price
# end




# json.set! @product.id do 
#   json.extract! @product, :id, :title, :description, :user_id, :category_id, :img_url, :price
# end




  json.extract! @product, :id, :title, :description, :user_id, :category_id, :img_url, :price
  json.set! :reviews, @product.reviews
  # json.set! :rating, @product.reviews.rating
  # json.set! :author, @product.reviews.author_name