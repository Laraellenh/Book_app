import React, {useEffect, useState} from 'react'
import FavoritesList from "./FavoritesList"
import SearchComponent from './SearchComponent';

function Home() {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("Cat's");


    // query the book api complete works by kurt vonnegut, search/select to make a list of your favorites. this should be queried to see the whole list to search through and choose from, then those selected should be stored to the local DB
//   this use effect is the side effect of clicking the search button so should maybe be moved to homepage
  useEffect(()=> {
    fetch('https://openlibrary.org/authors/OL20187A/works.json')
    .then(r=>r.json())
    .then((books)=>{
       console.log(books)
      setBooks(books)
    })
  }, [search])
  return (
    <div>Home
        <FavoritesList  books={books} setBooks={setBooks}/>
        <SearchComponent onSubmitSearch={setSearch}/>
    </div>
  )
}

export default Home