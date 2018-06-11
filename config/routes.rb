Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
    resource :sessions, only: [:create, :destroy]
    resources :products, only: [:create, :index, :destroy, :show]
    resources :categories, only: [:show]
  end
  root "static_pages#root"
end