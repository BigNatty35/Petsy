class Api::SearchItemsController < ApplicationController

  def index
    @products = Product.search_by_title(params[:query])
    render 'api/products/index'
  end

  private

  # def search_params
  #   params.require(:product).permit(:search_name)
  # end
end