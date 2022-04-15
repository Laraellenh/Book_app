import React, {useState} from 'react'


function OneBook({b,  handleClick}) {
    // console.log(b)
    const [elementOfObject, setElement] = ([])
    // console.log(user && user.id)
  // console.log(for of let key )
  function loopThroughB (b){
    for (let title in b){
     const dataArray = Object.entries(b)
     const title = dataArray[0]
     console.log("title", title)
    // console.log(title)
    // console.log(b[title])
   
  
    }
  }
  // loopThroughB(b)
  // console.log (b)
  const [faveTitle, setFaveTitle] = useState([])
  
  //  turn array into object then pass in

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