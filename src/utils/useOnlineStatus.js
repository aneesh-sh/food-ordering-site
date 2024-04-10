import { useEffect, useState } from "react";

const useOnlineStatus =() =>{
     // check if online 
     const [onlineStatus,setOnlineStatus] =useState(true);

     useEffect(() =>{
        
        window.addEventListener("Offline" ,() =>{
            setOnlineStatus(false);
        });

        window.addEventListener("Online" ,() =>{
            setOnlineStatus(true);
        }); 

     },[]);
     // boolean value
    return onlineStatus;
}
export default useOnlineStatus;