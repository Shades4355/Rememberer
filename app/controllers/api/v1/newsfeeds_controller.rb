class Api::V1::NewsfeedsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    feed = Newsfeed.all.reverse

    render json: feed
  end
end
