import React from 'react'

function BookMapper({title}) {
    console.log(title)
    
   

  return (
    <ul> List of Vonnegut Works
        <li>{title.title}</li> 

    </ul>
  )
}

export default BookMapper