import React, {useState} from 'react'

// build out a search function for the list of all books
function SearchComponent({setBooks, books, }) {
  
const [search, setSearch] = useState([])
const allBooks = books.map((book)=> 
console.log(book))
  // <li key={book.id} book={book} />
  


  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setSearch(search);
  // }

  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
    
    <form 
    // onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="search"> Search a Vonnegut Title:</label>
        <input
          id="search"
          className="form-control"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Find Book Titles
      </button>
    </form>
  </div>
  )
}

export default SearchComponent