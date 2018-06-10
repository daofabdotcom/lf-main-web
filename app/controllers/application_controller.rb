class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :js_file_name

  def js_file_name
    @controller = controller_name
    @action = action_name
    params["trans_key"] = ""
    params["trans_key"] = session[:session_id] if session[:session_id].present?
  end
end
