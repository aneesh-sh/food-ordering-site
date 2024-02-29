import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout=()=>{ 
  return(
    <div className="app">
      {/* //header  */}
      <Header/>
      {/* //body */}
      <Body/>
      {/* //footer */}

    </div>
  )
} 

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout/>);
