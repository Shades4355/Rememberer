class Admin::NewsfeedsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    feed = Newsfeed.all.reverse

    render json: feed
  end

  def show
    @feed = Newsfeed.find(params['id'])
  end

  def new
    @feed = Newsfeed.new
  end

  def create
    feed = Newsfeed.new(feed_params)

    if feed.save
      redirect_to '/'
    else
      flash[:error] = feed.errors.full_messages.to_sentence
      redirect_to '/admin/newfeeds/new'
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:story)
  end
end
