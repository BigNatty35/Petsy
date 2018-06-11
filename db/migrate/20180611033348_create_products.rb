class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :user_id, null:false
      t.text :description, null:false
      t.string :title, null:false
      t.float :price, null:false
      t.string :img_url
      t.integer :category_id, null:false
      t.timestamps
    end
    add_index :products, :user_id
    add_index :products, :category_id
  end
end
