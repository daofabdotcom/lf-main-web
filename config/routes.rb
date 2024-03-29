Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'static_page#homepage'


  get '/contact-us', :to=> 'static_page#contact'
  get '/about-us', :to=> 'static_page#about'
  get '/request-demo', :to=> 'static_page#demo'
  get '/DraftFAB', :to => 'static_page#cam'
  get '/HashFAB', :to => 'static_page#ptm'
  get '/press', :to => 'static_page#news'
  get '/post/:slug', :to => 'static_page#post'
  get '/terms_of_service', :to => 'static_page#tos'
  get '/privacy_policy', :to => 'static_page#privacy'
  post '/contact', :to => 'static_page#submit_contact'
  post '/subscribe', :to => 'static_page#do_subscribe'

  match "/404", :to => "static_page#not_found", :via => :all
end
