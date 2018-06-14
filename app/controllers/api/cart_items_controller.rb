class Api::CartItemsController < ApplicationController
  
  before_action :require_logged_in
  
  def create 
    @current_user = current_user
    
    @cart_item = CartItem.new(cart_item_params)
    # @cart_item.user_id = @current_user.id 
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
    params.require(:item).permit(:product_id, :product_img, :quantity, :user_id)
  end
end