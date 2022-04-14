class FavoriteBooksController < ApplicationController
    # wrap parameters format: []
    def create
        render json: FavoriteBook.create!(fave_params)
    end
    def show 
        render json: FavoriteBook.find_by(id: params[:id])
    end
    private
    def fave_params
        params.permit(:book_id, :user_id, :book)
    end


end
