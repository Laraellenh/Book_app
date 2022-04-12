class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_user
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  def current_user
      User.find_by(id:session[:current_user])
  end 

  private

  def unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  def not_found(error)
      render json: {error: "#{error.model} Not Found"}, status: :not_found
  end 
  def authorized_user
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ["Not authorized"]},status: :unauthorized unless @current_user
  end
end
