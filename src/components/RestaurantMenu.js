import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  // useState for data

  const [resList, setResList] = useState(null);
  const [resInfo, setResInfo] = useState(null);

  // This will get called After render
  useEffect(() => {
    fetchData();
  }, []);

  // get restaurant id from URL "/restaurands/:id"
  const { resId } = useParams();

  // Function that will get Data from swiggy API
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    const res = json?.data?.cards[2]?.card?.card?.info;
    const { itemCards } =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[5].card.card;

    setResList(itemCards);
    setResInfo(res);
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{resInfo.name} </h1>
      <h3>Rating - {resInfo.avgRating}</h3>
      <h2>Menu</h2>
      <p>
        {resInfo.areaName} , {resInfo.city}
      </p>
      <ul>
        {resList.map((res) => (
          <li key={res.card.info.id}>{res.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
