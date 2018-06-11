json.product do 
  json.extract! @product, :id, :title, :description, :user_id, :category_id, :img_url, :price
end