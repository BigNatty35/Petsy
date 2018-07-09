class Api::ReviewsController < ApplicationController
  
  def create
    @review = Review.new(review_params)
    @review.save
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:product_id, :author_id, :body, :author_name, :rating)
  end

end