import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header=()=>{

  // let btnName = "login"; 
  // normal js variable that wont work that is why we use state variable 

  const [btnNameReact,setbtnnameReact ] = useState("Login");
    return(

      <div className="header">
        <div className="logoContainer">
    
          <img className="logo" src= {LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>contact us</li>
              <li>Cart</li>
              <button className="login" onClick={() => {
                btnNameReact == "Login" ? setbtnnameReact("Logout") :setbtnnameReact("Login");
                // console.log(btnName);
              }}>
                {btnNameReact}</button>
            </ul>
        </div>
      </div>
    )
  }

  export default Header;