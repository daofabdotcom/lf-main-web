require 'net/http'

class StaticPageController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:do_subscribe]

  def homepage
  end

  def contact
    @site_key = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    #@site_key = '6LfSEHUUAAAAAActQOBSDo7cQjfRVvBqcoutF1tL'
  end

  def about

  end

  def request_demo

  end

  def cam

  end

  def ptm

  end

  def not_found

  end

  def news
    begin
      @posts = ButterCMS::Post.all({:page => 1, :page_size => 10})
      @featured_article = nil
      if @posts.to_a.length > 0
        @featured_article = @posts.to_a.first
      end
    rescue Exception => ex
      Rails.logger.error "Error occurred in fetching posts from butter cms."
    end

  end

  def post
    begin
      slug = params[:slug]
      @post = ButterCMS::Post.find(slug)
    rescue Exception => ex
      Rails.logger.error "Error occurred in fetching post from butter cms."
    end
  end

  def privacy

  end

  def tos

  end

  def submit_contact
    secret_key = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
    #secret_key = '6LfSEHUUAAAAAFcPFTTP1qZuJ5lAXeW2xy-0lE48'
    Rails.logger.info "New contact page submission from website with params #{params}"
    recaptcha_response = params['g-recaptcha-response']
    url = URI.parse('https://www.google.com/recaptcha/api/siteverify')
    res = Net::HTTP.post_form(url, {'secret': secret_key, 'response': recaptcha_response})
    puts "Response from google => #{res.body}"
    if res.body['success']
      begin
        send_mail = LfMailer.send_cust_query(params).deliver
      rescue Exception => ex
        Rails.logger.error "Error occurred while submitting contact form due to #{ex}"
      end
    end 
    flash[:success] = true
    flash[:message] = "Thank you submitting your query! Our team will get back to you soon."

    redirect_to '/home'
  end


  def do_subscribe
    Rails.logger.info "New subscriber from website with params #{params}"
    begin
      send_mail = LfMailer.new_subscriber(params['email']).deliver
    rescue Exception => ex
      Rails.logger.error "Error occurred while submitting contact form due to #{ex}"
    end
    render :json => {success: true}
  end

end
