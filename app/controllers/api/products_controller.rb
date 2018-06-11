class Api::ProductsController < ApplicationController
  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])
    render "api/products/show"
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render "api/products/show"
  end

  def index
    @products = Product.all 
    render "api/products/index"
  end

  private

  def product_params
    params.require(:product).premit(:description, :title, :price, :user_id, :category_id)
  end
end
