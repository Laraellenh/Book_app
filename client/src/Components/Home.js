
// import FavoritesList from "./FavoritesList"
// import SearchComponent from './SearchComponent';

import BookContainer from "./BookContainer"

function Home({handleFetchBooks}) {
  
  
 
  
    
  //   const allBooks = books.map((book)=>(
  //     console.log(book)))
      
    // query the book api complete works by kurt vonnegut, search/select to make a list of your favorites. this should be queried to see the whole list to search through and choose from, then those selected should be stored to the local DB
//   this use effect is the side effect of clicking the search button so should maybe be moved to homepage
 
  return (
    <div>Home
        <h3> </h3>
        <BookContainer  />
        
    </div>
  )
}

export default Home