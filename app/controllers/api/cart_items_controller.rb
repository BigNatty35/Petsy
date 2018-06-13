class Api::CartItemsController < ApplicationController
  
  def create 
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      render "api/cart_item/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render "api/products/show"
  end
  
  private

  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id)
  end
end