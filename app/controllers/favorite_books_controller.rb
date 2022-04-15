class FavoriteBooksController < ApplicationController

    def create

        book= Book.find_by(title: params[:title])
        byebug

        if !book
        
            newBook = Book.create!(title: params[:title], author_id: 1  )

           return render json: FavoriteBook.create(user_id: session[:user_id], book_id: newBook.id)
        end
        favebook = FavoriteBook.all.where({user_id: session[:user_id], book_id: book.id})
        byebug
        if !favebook

            return render json: FavoriteBook.create(user_id: session[:user_id], book_id: book.id)
        end
            render json: favebook[0]
    end
    def show 
        render json: FavoriteBook.find_by(id: params[:id])
	end

end
