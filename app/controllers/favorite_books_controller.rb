class FavoriteBooksController < ApplicationController
    # wrap parameters format: []
    def create
    
        book= Book.find_by(title: params[:title])
        byebug

        if !book
            # establish the relationship/create an instance of my join model
            
            newBook = Book.create!(title: params[:title], author_id: 1  )
        
           return render json: FavoriteBook.create(user_id: session[:user_id], book_id: newBook.id)
        end
        favebook = FavoriteBook.all.where({user_id: session[:user_id], book_id: book.id})
        byebug
        if !favebook
            # check if user already has as favorite

            return render json: FavoriteBook.create(user_id: session[:user_id], book_id: book.id)
        end
            render json: favebook[0]
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
    def book_params
        params.permit(:title, :author)
    end
   

end
