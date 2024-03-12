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
        <div className="filter">
          <input 
          type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e) =>{
            setsearchText(e.target.value);
          }}
          />
          <button 
          onClick={() => {
            // filter the restaurant and update the UI
            // search text
            const filteredRestaurant = listOfRestaurant.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()))

            setfilteredRestaurant(filteredRestaurant);

          }} >Search</button>
          <button 
          className = "filter-btn"
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
        <div className="rest-container">

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