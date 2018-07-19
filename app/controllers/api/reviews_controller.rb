class Api::ReviewsController < ApplicationController
  
  def create
    if logged_in?
    @current_user = current_user
    @review = Review.new(review_params)
    @review.author_name = @current_user.username
    @review.author_id = @current_user.id
    @review.save
    render 'api/reviews/show'
    else
      render json: ["You must be logged in"], status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render 'api/reviews/show'
  end

  def index
    @product = Product.find(params[:product_id])
    @reviews = @product.reviews
    render 'api/reviews/index'
  end

  private

  def review_params
    params.require(:review).permit(:product_id, :body, :rating)
  end

end