Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :newsfeeds, only: [:index]
    end
  end

  authenticate :user, lambda { |u| u.admin == true } do
    namespace :admin do
      resources :newsfeeds, only: [:create, :new, :show]
    end
  end
  resources :admin, only: [:index]
end
