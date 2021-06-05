class AdminController < ApplicationController
  def index
    if current_user.admin
      render json: {permission: true}
    else
      render json: {permission: false}
    end
  end
end
