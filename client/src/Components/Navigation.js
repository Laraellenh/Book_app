
import {Link} from "react-router-dom";

function Navigation({ onLogout, user}) {
   function handleLogout(){
        fetch('/logout',{
            method:'DELETE'
        })
        .then(() => onLogout());
    }
    return (
        <> 
   
         <h1>Nerd Out Book List </h1>
         <div>
            <button onClick={handleLogout}>Logout</button>
           {/* <h1><Link to="/"> Home</Link></h1> */}
           {user&&user.admin?<h1><Link to="/home" >Return Home</Link></h1>:null}

         </div>

        </>
    )
}

export default Navigation;