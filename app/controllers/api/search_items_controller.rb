class Api::SearchItemsController < ApplicationController

  def index
    @products = Product.search_by_title(params[:query])
    @query = params[:query]
    if @products.length < 1
      render json: ["#{params[:query]}"]
    else
      render 'api/products/index'
    end
  end
end