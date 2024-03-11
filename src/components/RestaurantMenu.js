import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo,setresInfo] =useState(null);

    const {resId} = useParams();
    console.log(resId)

    useEffect(() => {
        console.log("Fetching menu for restaurant ID:", resId);

        fetchMenu();
    },[resId])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json(); 
        console.log(json)
        setresInfo(json?.data);
    }

    if (resInfo == null) return  <Shimmer/>

    //Destructuring
    const {name,cuisines,costForTwoMessage,areaName,avgRatingString} = 
    resInfo?.cards[0]?.card?.card?.info ;

    const {itemCards} =
   resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage} - {areaName}  {avgRatingString}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =>
                <li key={item.card.info.id}>
                    {item.card.info.name}-{"Rs"}{item.card.info.price / 100}</li> )}
                
            </ul>
            
        </div>
    )
};

export default RestaurantMenu;