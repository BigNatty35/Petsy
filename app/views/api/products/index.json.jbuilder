
@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :price, :description, :user_id
    json.img_url  product.img_url
    json.category_id product.category_id
    json.username product.user.username
    json.reviews product.reviews
    json.profile_pic product.user.img_url
    json.category_name product.category.category_name
  end
end
