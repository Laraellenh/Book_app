Rails.application.routes.draw do
  
  resources :users, only: [:create, :index]
  resources :favorite_books
  resources :authors
  resources :books
  post "/login", to: "sessions#login"
  get '/authorized_user', to: "users#show"
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
