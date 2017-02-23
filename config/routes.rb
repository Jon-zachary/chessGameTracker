Rails.application.routes.draw do
  get 'welcome/index'

  get 'hello_world', to: 'hello_world#index'

  resources :games

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
