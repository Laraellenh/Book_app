import React, {useState} from 'react'

function Auth() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (e) => setUsername(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const [errors, setErrors] = useState([])
   
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const newUser = { username, email, password}
        setEmail("")
        setPassword("")
        setUsername("")
      fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      .then(json => {
        console.log(json)
        if(json.errors){
         setErrors(Object.entries(json.errors)) 
      } else {
        alert(`Welcome ${newUser.username}`)
      }
  })
}



 
          
          
      

     
      
  
    return (
        <> 
        <h1>Sign UP</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => handleUsername(e)} />
        </label>
        <label>
         email
    
        <input type="text" value={email} onChange={(e) => handleEmail(e)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => handlePassword(e)} />
        </label>
      
        
       
        <input type="submit" value="Sign up!" />
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default Auth;