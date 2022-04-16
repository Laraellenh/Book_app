
// import FavoritesList from "./FavoritesList"
// import SearchComponent from './SearchComponent';
import Navigation from './Navigation'
import BookContainer from "./BookContainer"

function Home({user, handleLogOutClick, setUser}) {
  
  
  return (
    <div>
        <Navigation handleLogOutClick={handleLogOutClick} setUser={setUser}/>
        <h3> Welcome to Your Vonnegut Planner </h3>
        <BookContainer user={user} />

    </div>
  )
}

export default Home