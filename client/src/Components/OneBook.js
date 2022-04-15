import React, {useState} from 'react'


function OneBook({b,  handleClick}) {
   
const [faveTitle, setFaveTitle] =  useState([])

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
      console.log(data)
      setFaveTitle([...faveTitle, data])
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
        
    </div>
  )
}

export default OneBook