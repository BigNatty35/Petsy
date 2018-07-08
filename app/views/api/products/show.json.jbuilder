# json.product do 
#   json.extract! @product, :id, :title, :description, :user_id, :category_id, :img_url, :price
# end




# json.set! @product.id do 
#   json.extract! @product, :id, :title, :description, :user_id, :category_id, :img_url, :price
# end




  json.extract! @product, :id, :title, :description, :user_id, :category_id, :img_url, :price
  json.set! json.body @product.reviews.body
  json.set! json.rating @product.reviews.rating
  json.set! json.author @product.reviews.author_name