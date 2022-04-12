import React, {useEffect, useState} from 'react'
import FavoritesList from "./FavoritesList"
import SearchComponent from './SearchComponent';

function Home() {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("Cat's");


   
    // query the book api complete works by kurt vonnegut, search/select to make a list of your favorites. this should be queried to see the whole list to search through and choose from, then those selected should be stored to the local DB
//   this use effect is the side effect of clicking the search button so should maybe be moved to homepage
  
  
  return (
    <div>Home
        <h3> Favorite Vonnegut Titles </h3>
        <FavoritesList  />
        <SearchComponent onSubmitSearch={setSearch}/>
    </div>
  )
}

export default Home