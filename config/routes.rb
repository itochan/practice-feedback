Rails.application.routes.draw do
  resources :practices, only: [:create, :destroy]

  get 'practices/:access_hash', to: 'practices#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
