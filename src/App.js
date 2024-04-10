import React ,{Suspense, lazy} from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/shimmer";
// import Grocery from "./components/Grocery";


//chinking
//Dynamic Bundling
//code spliting
//on demand loading
// lazy loading

const  Grocery = lazy(()=> import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout=()=>{ 
  return(
    <div className="app">
      <Header/>
      <Outlet/>
      {/* if path = /  then body*/}
      {/* if path = /about */}
      {/* if path = /contact */}
    </div>
  )
} 

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/about",
        element : <Suspense fallback ={<Shimmer/>}><About/></Suspense>,
      },
      {
        path : "/contact",
        element : <Contact/>,
      },
      {
        path : "/grocery",
        element : <Suspense fallback ={<Shimmer/>}><Grocery/></Suspense>,
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu/>,
      },
    ],
    errorElement : <Error/>,
  },
 
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router = {appRouter }/> );
