class StaticPageController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:do_subscribe]

  def homepage

  end

  def contact

  end

  def about

  end

  def request_demo

  end

  def cam

  end

  def ptm

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

  def tnc

  end

  def submit_contact
    Rails.logger.info "New contact page submission from website with params #{params}"
    begin
      send_mail = LfMailer.send_cust_query(params).deliver
    rescue Exception => ex
      Rails.logger.error "Error occurred while submitting contact form due to #{ex}"
    end
    flash[:success] = true
    flash[:message] = "Thank you submitting your query! Our team will get back to you soon."

    redirect_to '/contact-us'
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
