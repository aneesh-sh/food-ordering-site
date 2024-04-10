import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
  
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;
  
    return (
<<<<<<< HEAD
      <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
   
        <img className="rounded-lg" 
        alt="rest-logo"
         src={ CDN_URL +resData.info.cloudinaryImageId }
            />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 >{cuisines.join(', ')}</h4>
=======
      <div className="rest-card">
   
        <img className="rest-logo" alt="rest-logo" src={ CDN_URL +
            resData.info.cloudinaryImageId }
            />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
>>>>>>> dcf97b2b175fba8098c021a462954bb3d2138510
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    )
  }

  export default RestaurantCard;