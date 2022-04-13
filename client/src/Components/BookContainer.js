import React, {useState, useEffect} from 'react'
import FavoritesForm from './FavoritesForm'
import SearchComponent from './SearchComponent'

function BookContainer() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books')
        .then(response => response.json())
        .then(books => {
          setBooks(books)
          console.log(books)
      }, [])
    })
    // Object.entries(books).map((bookOBJ)=> 
    //   console.log(bookOBJ)
    //  )
  return (
    <div>
        {/* <button type="submit" className="btn btn-success" onClick={handleFetchBooks} > Search for Vonnegut Works  </button> */}
        <SearchComponent setBooks={setBooks} books= {books} />
        <FavoritesForm />
    </div>
  )
}

export default BookContainer