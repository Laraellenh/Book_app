
// import './App.css';
import Auth from './Auth'
import Login from './Login'
import { Route, Switch } from "react-router-dom";
import {useEffect, useState} from 'react'
import Navigation from './Navigation'
import Home from './Home'
// import SearchComponent from './SearchComponent';
import BookContainer from './BookContainer'



function App() {
 
  
  const [user, setUser] =useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }
  
  return (
    <>
    <Navigation  onLogout={handleLogout} setUser={setUser} />
    <BookContainer />
    <Switch>  
    <Route path="/signup">
          <Auth/>
    </Route>
    <Route path="/login">
          <Login onLogin={handleLogin} />
    </Route>
    <Route path="/"> <Home user={user} /></Route>
    <Route path="/logout"></Route>
    </Switch>
   
    </>
  );
}

export default App;
