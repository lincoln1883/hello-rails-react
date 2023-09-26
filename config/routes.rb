Rails.application.routes.draw do
  root 'root#index'
  get '/message/random', to: 'message#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
