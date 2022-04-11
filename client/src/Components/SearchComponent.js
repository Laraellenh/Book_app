import React, {useState} from 'react'

// build out a search function for the list of all books
function SearchComponent({onSubmitSearch}) {


    const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitSearch(search);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
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