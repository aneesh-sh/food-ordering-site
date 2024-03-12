import { render } from "react-dom";
import User from "./User"
import UserClass from "./UserClass"
import React from "react";

class  About extends React.Component{
    constructor(props) {
        super(props);
        // console.log("parent constructor");
        
    }

    async componentDidMount(){
        // console.log("parent component did mount");
        // API calls are over here 
       
     }

    render(){
        // console.log("paren render");
        return  (
            <div>
                <h1>About Us</h1>
                <h2>This is a Food ordering site</h2>
                <UserClass name={"Aneesh Sharma (class)"} location ={"Delhi (class)"}/>
          
            </div>
        );
    }
}

export default About

// /render phase 
// // parent constructor
// // parent render 

//      // aneesh constructor 
//      // aneesh render

//      // elon constructor 
//      // elon render
//   <DOM UPDATED - in single batch 
// commit phase
//      // aneesh componentDidMount
//      // elon componentDidMount

// cmponentdid mount module
// // parent componentdidmount