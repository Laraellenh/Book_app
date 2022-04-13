import React, {useState} from 'react'
import BookList from './BookList'
import SearchComponent from './SearchComponent'
import OneBook from './OneBook'

function BookMapper({title}) {
    // array of components
    // const[b, setB] = useState([])
    const bookComponentArray = title.map(b=> {
        // console.log("mapped", b) 
        return <OneBook b={b}/>
    })
    
        // the return value of the callback to be what you want in that array
       
        // return ([] b={b} key={b.id}>List of Vonnegut Works</BookList>)
    //     if(b.length===0)
    //         setB(b)
    // })
    // setBookTitle(booktitle)
    // setBookTitle(booktitle)
    // const B = title.
    // title.forEach(setBookTitle(booktitle))
    // console.log(booktitle)

    // t.map(bookobj=>{console.log(t)})
    
  return (
    
    
    <div>
         <SearchComponent  />
        {bookComponentArray}   
        
    </div>
    
  )
}

export default BookMapper