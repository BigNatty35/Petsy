class Api::SearchItemsController < ApplicationController

  def index
    @products = Product.search_by_title(params[:query])
    render 'api/products/index'
  end

end