import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{

  // State variable
  const [listOfRestaurant,setListOfRestaurant] = useState(resList);
  
  // normal JS variable
//   let listofRestaurantJS=[
//     {
//     data:{
//     id: '121603',
//     name: 'Kannur Food Point',
//     cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//     cuisines: ['Kerala', 'Chinese'],
//     costForTwo: 30000,
//     deliveryTime: 24,
//     avgRating: '3.9',
    
//   },
//   },

//   {
//     data:{
//     id: '121608',
//     name: 'delhi Food Point',
//     cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//     cuisines: ['North INdian ', 'Chinese'],
//     costForTwo: 30000,
//     deliveryTime: 24,
//     avgRating: '4.9',
    
//   },
//   },
 
//   {
//     data:{
//     id: '221608',
//     name: 'mumbai Food Point',
//     cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//     cuisines: ['vada pav ', 'Chinese'],
//     costForTwo: 30000,
//     deliveryTime: 24,
//     avgRating: '4.1',
    
//   },
//   }
// ]


    return(
      <div className="body">
        <div className="filter">
          <button 
          className = "filter-btn"
           onClick={ () => {
            //filter logic here 
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
              setListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
            </button>
          </div>
        <div className="rest-container">

          {  listOfRestaurant.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
   
        </div>
      </div>
    )
  }

  export default Body;