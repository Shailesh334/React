import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchRest, setSearchRest] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6625542&lng=75.90852799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    let apiData =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
    setFilteredRestaurants(apiData);
    setListOfRestaurants(apiData);
   
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="upper">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 4;
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            High Rated Restaurants
          </button>
        </div>

        <div className="search-bar">
          <input
            className="search-input"
            value={searchRest}
            onChange={(e) => {
              setSearchRest(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filterserachlist = listOfRestaurants.filter(
                (restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchRest.toLowerCase());
                }
              );
              setFilteredRestaurants(filterserachlist);
            }}
          >
            {" "}
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} dataObj={restaurant} />
        ))}

        {/* /*     NOT RECOMMENDED BAD PRACTICE
                    {dataList.map((restaurant , index) => (
                    <RestaurantCard key={index} dataObj={restaurant} />
                    ))}*/}
      </div>
    </div>
  );
};

export default Body;
