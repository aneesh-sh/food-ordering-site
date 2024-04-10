import { LOGO_URL } from "../utils/constant";
import { useState  } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

  const [btnNameReact,setbtnnameReact ] = useState("Login");
  const onlineStatus =useState();


    return(
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
        <div className="logoContainer">
    
          <img className="w-40" src= {LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li className=" px-4">
                Online Status : {onlineStatus ? "✅" : "🔴"}
              </li>
              <li className=" px-4">
                < Link to ="/">Home</Link>
                </li>
              <li className=" px-4">
                <Link to="/about">About us</Link>
                </li>
              <li className=" px-4" >
                <Link to="/contact">Contact us</Link>
                </li>
                <li className=" px-4">
                  <Link to="/grocery">Grocery</Link>
                </li>
              <li className=" px-4">Cart</li>

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