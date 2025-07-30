
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) =>{

    
  // useState for data

  const [resList, setResList] = useState(null);
  const [resInfo, setResInfo] = useState(null);

  // This will get called After render
  useEffect(() => {
    fetchData();
  }, []);

  

  // Function that will get Data from swiggy API
  const fetchData = async () => {

    const data = await fetch(MENU_API + resId);
    const json = await data.json();
   
    const res = json?.data?.cards?.find((card) => card.card?.card?.info)?.card
      ?.card?.info;

    const regularCards = json?.data?.cards?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuCategories = regularCards.filter((c)=>c?.["card"]?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   
   

    setResInfo(res);
    setResList(menuCategories);
  };


    return { resInfo , resList};
}


export default useRestaurantMenu;