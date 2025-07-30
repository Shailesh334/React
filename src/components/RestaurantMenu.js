import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import MenuCategory from "../components/MenuCategory";

const RestaurantMenu = () => {
  // get restaurant id from URL "/restaurands/:id"
  const { resId } = useParams();

  // getting restaurant Info and Menu itemsfrom custom hook
  const { resInfo, resList } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer name="menu" />;

  return (
    <div className="max-w-3xl mx-auto bg-white px-4 py-4">
      <h1 className="font-bold  t-gray-800 text-3xl ">{resInfo.name}</h1>

      <div className="w-200 py-2 border-solid border-black shadow-2xs">
        <div>
          ⭐{resInfo.avgRating} ({resInfo.totalRatingsString}){" "}
          {resInfo.costForTwoMessage}
        </div>
        <div className="text-orange-600 font-semibold  py-2">
          {resInfo.cuisines.join(" , ")}
        </div>
        <div className="text-gray-600 p-none">
          {resInfo.locality} , {resInfo.city}
        </div>
      </div>

      {/* Menu Items  */}
      {resList.map((menuCat, index) => (
        <MenuCategory
          key={menuCat?.card?.card?.categoryId}
          dataObj={menuCat}
          showItems={index === showIndex ? true : false} 
          setShowIndex = {()=> setShowIndex(index)}
          closeAll = {()=>setShowIndex(null)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
