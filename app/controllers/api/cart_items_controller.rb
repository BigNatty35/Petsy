class Api::CartItemsController < ApplicationController
  
  before_action :require_logged_in
  
  def create 
    @cart_item = CartItem.new(cart_item_params)
    @cart_item.user_id = currentUser.id 
    if @cart_item.save
      render "api/cart_items/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @cart_item = CartItem.find(params[:id])
      render "api/cart_items/show"
  end

  
  def index
    @cart_items = CartItem.all
    render "api/cart_items/index"
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render "api/cart_items/show"
  end
  
  private

  def cart_item_params
    params.require(:cart_item).permit(:product_id, :product_img, :quantity)
  end
end