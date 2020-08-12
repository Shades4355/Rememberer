class Api::V1::NewsfeedsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    feed = "This is a triumph; I'm making a note here, 'huge success'"

    render json: feed
  end
end
