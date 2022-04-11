class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    skip_before_action :authorized_user, only: [:login]

    def login
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok 
        else 
            render json: {error: "Invalid Password or Username"}, status: :unprocessable_entity
        end 
    end 

    def destroy
        session.delete :current_user
        
    end 
end
