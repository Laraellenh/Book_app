class Author < ApplicationRecord
    has_many :books
    has_many :users, through: :books
    has_many :favorite_books, through: books
end
