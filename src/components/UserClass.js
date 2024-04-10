import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                Location: "Default",
                avatar_url: "http://dummy-photo.com"

            },
        };
        console.log(this.props.name+"child constructor");
    }
     async componentDidMount(){
        console.log(this.props.name+"child component did mount");
        // api calls
        const data = await fetch("https://api.github.com/users/aneesh-sh");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo :json,
        })
        console.log(json);
     }
     componentDidUpdate(){
        console.log("component updated");
     }
     componentWillUnmount(){
        console.log("component will unmount");
     }

    render(){
        console.log(this.props.name+"child render");
        const {name ,location,avatar_url} =this.state.userInfo;
       
        return (
            <div className="user-card">
             <img src ={avatar_url}></img>   
            <h2>Name: {name}</h2>
            <h3>Location: {location} </h3>
            <h4>Contact: aneesh.21shhhhhhhh</h4>

            </div>
        )
    }
}

export default UserClass;