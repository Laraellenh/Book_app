class FavoriteBookSerializer < ActiveModel::Serializer
  attributes :id, :book_id

  belongs_to :book
end
