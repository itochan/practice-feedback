Rails.application.routes.draw do
  namespace :practices do
    scope ':access_hash' do
      get '', action: 'show'
      resources :comments, controller: '/comments' do
      end
    end
  end

  resources :practices, only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
