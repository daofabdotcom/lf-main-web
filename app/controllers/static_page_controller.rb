class StaticPageController < ApplicationController
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

end
