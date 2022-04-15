
// import './App.css';
import Auth from './Auth'
import Login from './Login'
import { Route, Switch } from "react-router-dom";
import {useEffect, useState} from 'react'

import Home from './Home'
// import SearchComponent from './SearchComponent';
import BookContainer from './BookContainer'

import { useHistory } from "react-router-dom";

function App() {
 
  const history = useHistory()
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
    history.push("/")
    
  }

  function handleLogout() {
   
    setUser(null);
    history.push("/login")
  }
  
  return (
    <>
    {/* <Navigation  onLogout={handleLogout} setUser={setUser} /> */}
    <BookContainer />
    <Switch>  
    <Route exact path="/signup">
          <Auth/>
    </Route>
    <Route exact path="/login">
          <Login onLogin={handleLogin}  />
    </Route>
    <Route exact path="/"> <Home user={user} onLogout={handleLogout} setUser={setUser}/></Route>
    <Route exact path="/logout"></Route>
    </Switch>
   
    </>
  );
}

export default App;
