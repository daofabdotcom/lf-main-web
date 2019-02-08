class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :js_file_name

  def js_file_name
    @controller = controller_name
    @action = action_name
    params["trans_key"] = ""
    params["trans_key"] = session[:session_id] if session[:session_id].present?
    @news = []
    @posts = ButterCMS::Post.all({:page => 1})
    if @posts.to_a.length > 0
    @news = @posts.to_a[0..1]
    end
    rescue Exception => ex
      Rails.logger.error "Error occurred in fetching posts from butter cms."
    end
  end


