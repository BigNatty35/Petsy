class AddProductImgToCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :product_img, :string
  end
end
