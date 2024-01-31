Rails.application.routes.draw do
  namespace :api do
    resources :test
    resources :otyakais
  end
end