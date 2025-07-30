import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  const { dataObj } = props;

  const { name, cuisines, avgRatingString, sla, id } = dataObj.info;

 return (
  
    <div className="bg-white rounded-xl shadow-md hover:scale-105 duration-300">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + dataObj.info.cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h4>
        <h4 className="text-sm font-medium text-green-600 mb-1">⭐ {avgRatingString}</h4>
        <h4 className="text-sm text-gray-500">{sla.slaString} min delivery</h4>
      </div>
    </div>

);

};


export const withBestChoiceLabel = (RestaurantCard)=>{
  return (props)=>{
    const { dataObj } = props;
    const { id } = dataObj.info;
    return(
    
      <div>
        <label className="absolute p-2  bg-black text-white rounded-b-lg">Best Choice</label>
        <RestaurantCard {...props}/>
      </div>
   
    )
  }
}
export default RestaurantCard;
