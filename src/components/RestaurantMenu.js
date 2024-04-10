import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
   
    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) return  <Shimmer/>

    //Destructuring
    const {name,cuisines,costForTwoMessage,areaName,avgRatingString} = 
    resInfo?.cards[0]?.card?.card?.info ;

    const {itemCards} =
   resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
<<<<<<< HEAD
            <p className="font-bold text-lg">
                {cuisines.join(',')} - {costForTwoMessage} - {areaName}  {avgRatingString}
                </p>
=======
            <p>{cuisines.join(',')} - {costForTwoMessage} - {areaName}  {avgRatingString}</p>
>>>>>>> dcf97b2b175fba8098c021a462954bb3d2138510
            <h2>Menu</h2>
            <ul>
                {itemCards && itemCards.map((item)=>(
                <li key={item.card.info.id}>
                    {item.card.info.name}-{"Rs"}{item.card.info.price / 100}</li> ))}
                
            </ul>
            
        </div>
    )
};

export default RestaurantMenu;