class ProductsController < ApplicationController
  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    render "api/products/show"
  end

  def destroy
  end

  def index
  end

  private

  def product_params
    params.require(:product).premit(:description, :title, :price, :user_id, :category_id)
  end
end
