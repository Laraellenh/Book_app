import React, {useState} from 'react'

import SearchComponent from './SearchComponent'
import OneBook from './OneBook'
import FavoritesList from './FavoritesList'

function BookMapper({title, user}) {
  const [faveTitle, setFaveTitle] = useState([])
  console.log(user)
    // array of components
    // const[b, setB] = useState([])
  const bookComponentArray = title.map(b=> {
      // console.log("mapped", b) 
    return <OneBook user={user} faveTitle={faveTitle} key={b.id} setFaveTitle={setFaveTitle} handleClick={handleClick} b={b}/>})

    function handleClick(b){
      // need to add this title to the FavoriteList, then post it to the DB, so it persists
      // when you click, the title is posted to where? backend? post/books controller?
        const newObj = 
          { 
            b, 
            user: user,
           
          }
          
          
          fetch('/favorite_books', {
          method:"POST",
          headers: {
              'Content-Type':"application/json"},
              body: JSON.stringify(newObj)
             
          })
          .then(r=>r.json())
          // a .then to add the book as an instance of book to my backend (save to db and to users favorite)
          .then(data=>setFaveTitle([...faveTitle, data]))
      // post to the FavoritesList
          console.log("newfave", newObj)
    }
    

  return (
    
    
    <div>
      <FavoritesList/>
      <SearchComponent  />
      {bookComponentArray}   
        
    </div>
    
  )
}

export default BookMapper