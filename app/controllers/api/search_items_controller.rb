class Api::SearchItemsController < ApplicationController

  def index
    @products = Product.find_each do |product|
      item.include?(search_params)
    end
    render 'api/products/index'
  end

  private

  def search_params
    params.require(:search).permit(:search_name)
  end
end