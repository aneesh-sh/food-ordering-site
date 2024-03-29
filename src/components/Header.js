import { LOGO_URL } from "../utils/constant";
import { useState  } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

  const [btnNameReact,setbtnnameReact ] = useState("Login");
  const onlineStatus =useState();


    return(
      <div className="header">
        <div className="logoContainer">
    
          <img className="logo" src= {LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
              <li>
                Online Status : {onlineStatus ? "✅" : "🔴"}
              </li>
              <li>
                < Link to ="/">Home</Link>
                </li>
              <li>
                <Link to="/about">About us</Link>
                </li>
              <li>
                <Link to="/contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/grocery">Grocery</Link>
                </li>
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