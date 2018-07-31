class Api::CartItemsController < ApplicationController
  
  # before_action :require_logged_in
  
  def create 
    if logged_in?
      @current_user = current_user
      @cart_item = CartItem.new(cart_item_params)
      @cart_item.user_id = @current_user.id
      @cart_items = @current_user.cart_items

      if itemExists?(@cart_items, @cart_item)
        render json: ["You aleady have this item in cart"], status: 422
      else
        @cart_item.save
        render "api/cart_items/show"
      end
      
    else
     render json: ["You must be logged in"], status: 422
    end
  end

  def show
    @cart_item = CartItem.find(params[:id])
      render "api/cart_items/show"
  end

  def update
    @cart_item = CartItem.find(params[:id])
    @cart_item.update(cart_item_params)
      render "api/cart_items/show"
  end

  def index
    @current_user = current_user
    @cart_items = @current_user.cart_items
    render "api/cart_items/index"
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render "api/cart_items/show"
  end

  def remove_all
    @cart_item_ids = params[:itemIds]
    @cart_item_ids.each do |id|
      item = CartItem.find(id)
      item.destroy
    end
    render json: {}
  end
  
  private

  def cart_item_params
    params.require(:item).permit(:product_id, :product_img, :quantity)
  end

  def itemExists?(items, new_item)
    items.each do |item|
      return true if item.product_id == new_item.product_id
    end
    return false
  end
end