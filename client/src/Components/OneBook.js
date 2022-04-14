import React from 'react'


function OneBook({b, handleClick}) {
    
    
    // console.log(b)
    // b.map(bookObj=>console.log(bookObj)) if i want to show details of each book beyond title i can map the book objects and add the details as props
    
    

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