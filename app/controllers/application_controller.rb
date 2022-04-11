class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_user
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def current_user
    User.find_by(id: session[:current_user])
  end
  def authorized_user
    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
  end
  private
  def not_found (error)
    render json: {error: "#{error.model} Not Found"}, status: :not_found
  end

end
