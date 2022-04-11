import React, {useState} from 'react'
import FavoritesForm from './FavoritesForm'

function FavoritesList({books, setBooks}) {
    // const [errors, setErrors] = useState(false);
    // when the user clicks on add favorite book button, the data will store to the user's favorite's book's, is this the correct url?
//   function handlePostFavoriteBooks(obj){
//     fetch('/home,{
//       method:'POST',
//       headers: {'Content-Type': 'application/json'},
//       body:JSON.stringify(obj)
//     })
//     .then(res => {
//       if(res.ok){
//         res.json()
//         .then(json =>  {
//           setBooks([...books,json])
//         })
//       } else {
//         res.json()
//         .then(json => {
//         setErrors(Object.entries(json.errors))
//         })
//       }
//     })
// }
    // const allBooks = ...books, plus new object from the form, build out the form where they can select a book from the api and add to our db locally so show on their favorites list

  return (
    <div>FavoritesList
        <FavoritesForm />
    </div>
  )
}

export default FavoritesList