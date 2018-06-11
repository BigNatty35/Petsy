@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :price, :description
    json.img_url image_path(product.img_url)
    json.category_id product.category_id
  end
end