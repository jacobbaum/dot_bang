Rails.application.routes.draw do

  
  namespace :api do  
    resources :kits, except: [:new, :edit, :patch]
    resources :notations, except: [:new, :edit, :patch]
    resources :scores, except: [:new, :edit, :patch]
    resources :users,  except: [:new, :edit, :patch] do
      resources :notations, except: [:new, :edit, :patch]
    end
    resources :sessions, only: [:index, :create] #, :destroy]

    # This way we don't need to pass in the session ID in the URL,
    # instead we infer it from the cookie.
    delete '/sessions', to: 'sessions#destroy'


    #For future use:
    # resources :samples, except: [:new, :edit, :patch]

  end
  
end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

