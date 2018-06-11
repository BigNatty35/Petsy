class Api::CategoriesController < ApplicationController
  def show
    @category = Category.find(params[:id])
    render "api/categories/show"
  end

end