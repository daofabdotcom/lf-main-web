Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'static_page#homepage'


  get '/contact-us', :to=> 'static_page#contact'
  get '/about-us', :to=> 'static_page#about'
  get '/request-demo', :to=> 'static_page#demo'
end
