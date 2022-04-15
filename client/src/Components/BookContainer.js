import React, {useState, useEffect} from 'react'
import BookMapper from './BookMapper'

function BookContainer() {
    const [title, setTitle] = useState([])
 
  //  function handlePopulateBooks(){
  //     if(books.length===0)
  //         fetch('/books')
  //         .then(response => response.json())
  //         .then(books => {
  //           console.log(books.entries)
  //           setBooks(books.entries)
  //         });
  //       }
  useEffect(()=>{
    fetch('/books')
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      console.log(data.entries)
      
      // .map(title=>{
        // console.log(title)
        setTitle(data.entries)
      // })
      // return(<Home title={title} key={title.id}> Works of Kurt Vonnegut</Home> )
    })
  
  }, [])
    //  console.log(title)
  return (
    <div>
        <BookMapper  setTitle={setTitle} title={title}/>
       
    </div>
  )
};

export default BookContainer