import React, {useState} from 'react'
import FavoritesList from './FavoritesList'


function OneBook({b}) {
  //  this is the array where we want to keep the users faves in state on the local db

  const [faveTitle, setFaveTitle] = useState([])
  console.log( "faveTitle", faveTitle)
 
  function handleClick(title){
   
        fetch('/favorite_books', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
            body: JSON.stringify(title)
           
        })
        .then(r=>r.json())
        .then(data=>{
          
          setFaveTitle([data])
          console.log("array of data", [data])
        })
  }
  
  return (
    <div>
        <h4>{b.title}
            <button 
            onClick={()=>handleClick(b)}
            >
                Add to Your Favorites List
            </button>
        </h4>
        <FavoritesList setFaveTitle={setFaveTitle} faveTitle={faveTitle}  />
        
    </div>
  )
}

export default OneBook