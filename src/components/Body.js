import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constant";



const Body = ()=>{

  // State variable
  const [listOfRestaurant,setListOfRestaurant] = useState([]);
  const [searchText,setsearchText] = useState("")
  const [filteredRestaurant,setfilteredRestaurant] = useState([]);


useEffect(() => {
  fetchData();
},[])

const fetchData = async() =>{
const data = await fetch(SWIGGY_API);

const json = await data.json();
console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
};


const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return 
  (
  <h1>
  Looks like you are Offline!!! please check your internet connection;
  </h1>
  );
  console.log(onlineStatus);

    return listOfRestaurant.length == 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
          <input 
          type="text" 
          className="border border-solid border-black" 
          value={searchText} 
          onChange={(e) =>{
            setsearchText(e.target.value);
          }}
          />
          <button className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
  
            const filteredRestaurant = listOfRestaurant.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setfilteredRestaurant(filteredRestaurant);

          }} >
            Search
            </button>
            </div>
            <div className="search m-4 p-4 flex items-center ">
            <button 
          className = "px-4 py-2 bg-gray-100 rounded-lg"
           onClick={ () => {
            //filter logic here 
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
              setListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
            </button>
            </div>
         
          </div>
        <div className="rest-container flex flex-wrap">

          {  filteredRestaurant.map((restaurant) => (
            <Link
             key={restaurant.info.id} 
             to ={"/restaurants/"+ restaurant.info.id}>
              <RestaurantCard  resData={restaurant} />
              </Link>
          ))}
   
        </div>
        </div>
     
    )
  }

  export default Body;