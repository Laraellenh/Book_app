
import {Link} from "react-router-dom";

function Navigation({ setIsAuthenticated, setUser, user}) {
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }
    return (
        <> 
   
         <h1>Nerd Out Book List </h1>
         <div>
            <button onClick={logout}>Logout</button>
           {/* <h1><Link to="/"> Home</Link></h1> */}
           {user&&user.admin?<h1><Link to="/home" >Return Home</Link></h1>:null}

         </div>

        </>
    )
}

export default Navigation;