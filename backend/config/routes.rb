Rails.application.routes.draw do
  namespace :api do
    resources :test
    resources :otyakais
    resources :user
    resources :participant
  end
end