import React, {useState} from 'react'

import SearchComponent from './SearchComponent'
import OneBook from './OneBook'
import FavoritesList from './FavoritesList'

function BookMapper({title}) {
//  console.log(title)
  // const bookComponentArray = title.map(b=> <OneBook key={b.id}  b={b}/>)
   
  return (
    
    
    <div>
      <FavoritesList/>
      <SearchComponent  />
      {/* {bookComponentArray}    */}
        
    </div>
    
  )
}

export default BookMapper