class Api::SearchItemsController < ApplicationController

  def index
    @products = Product.search_product(search_params[:search_name])
    render 'api/products/index'
  end

  private

  def search_params
    params.require(:search).permit(:search_name)
  end
end