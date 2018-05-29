Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'static_page#homepage'


  get '/contact-us', :to=> 'static_page#contact'
  get '/about-us', :to=> 'static_page#about'
  get '/request-demo', :to=> 'static_page#demo'
  get '/contract_assembly_management', :to => 'static_page#cam'
  get '/project_transaction_monitoring', :to => 'static_page#ptm'
  get '/press', :to => 'static_page#news'
  get '/post/:slug', :to => 'static_page#post'
  get '/terms_and_conditions', :to => 'static_page#tnc'
  get '/privacy_policy', :to => 'static_page#privacy'
  post '/contact', :to => 'static_page#submit_contact'

end
