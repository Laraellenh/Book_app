
// import './App.css';
import Auth from './Auth'
import Login from './Login'
import { Route, Switch } from "react-router-dom";
import {useEffect, useState} from 'react'
import Navigation from './Navigation'
import Home from './Home'



function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] =useState(null);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if(res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        })
        .then(()=> {
          fetch('/home')
          .then(res => res.json())
        
        })
      }
    });

   

  },[]);

  
  useEffect(()=> {
    fetch('/books')
    .then(response => response.json())
    .then(response => console.log(response))
  }, [])

  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  return (
    <>
    <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
    <Switch>  
    <Route path="/signup">
          <Auth/>
    </Route>
    <Route path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
    </Route>
    <Route path="/"> <Home user={user} books={books} setBooks={setBooks} /></Route>
    <Route path="/logout"></Route>
    </Switch>
   
    </>
  );
}

export default App;
