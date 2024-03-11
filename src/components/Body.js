import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = ()=>{

  // State variable
  const [listOfRestaurant,setListOfRestaurant] = useState([]);
  const [searchText,setsearchText] = useState("")
  const [filteredRestaurant,setfilteredRestaurant] = useState([]);


useEffect(() => {
  fetchData();
},[])

const fetchData = async() =>{
const data = await fetch(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

const json = await data.json();
console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
};

//Conditional Rendering 
// if(listOfRestaurant.length == 0){
//   return <Shimmer />
// }

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