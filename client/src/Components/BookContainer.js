import React, {useState, useEffect} from 'react'
import BookMapper from './BookMapper'

function BookContainer() {
  // state for the API books not yet on backend
    const [title, setTitle] = useState([])
 
  useEffect(()=>{
    fetch('/books')
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      console.log(data.entries)
      setTitle(data.entries)
    })
  
  }, [])

  return (
    <div>
        <BookMapper  setTitle={setTitle} title={title}/>
       
    </div>
  )
};

export default BookContainer