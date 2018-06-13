
@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :price, :description, :user_id
    json.img_url  product.img_url
    json.category_id product.category_id
    json.username product.user.username
  end
end