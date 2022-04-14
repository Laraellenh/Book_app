class FavoriteBooksController < ApplicationController
    # wrap parameters format: []
    def create
        byebug
        favebook= Book.find_by(title: params[:title])
        if !favebook
            # establish the relationship/create an instance of my join model
         newBook = Book.create!(title: params[:title], author_id: 1  )
        FavoriteBook.create(book: newBook)
        end

    end
    def show 
        render json: FavoriteBook.find_by(id: params[:id])
    end
    private
    def fave_params
        params.permit(:book_id, :user_id, :book)
    end
    def only_title
        params.permit(:title)
    end
    def reject
        params.reject!(:covers, :key, :authors, :type, :description, :latest_revision, :revision, :created, :last_modified)
    end
   

end
