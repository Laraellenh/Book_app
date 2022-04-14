
   
import React, {useState} from 'react'
import Auth from './Auth'

// import { useHistory } from "react-router-dom";


function Login({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])
    // let navigate = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
      
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
          .then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            }
          });
        }
            
         
    return (
      
        <> 
        <h1>Nerd Out Book List</h1>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Login!" />
      </form>
      {error?<div>{error}</div>:null}
      <Auth />
        </>
    )
}

export default Login;