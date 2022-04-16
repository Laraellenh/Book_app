import React from 'react'

// import SearchComponent from './SearchComponent'
import OneBook from './OneBook'
import FavoritesList from './FavoritesList'

function BookMapper({title}) {
 console.log(title)
//  these are still just books from the API
  const bookComponentArray = title.map(b=> <OneBook key={b.id}  b={b}/>)
   
  return (
    
    
    <div>
      <FavoritesList/>
      {/* <SearchComponent  /> */}
      {bookComponentArray}   
        
    </div>
    
  )
}

export default BookMapper