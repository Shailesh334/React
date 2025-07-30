import RestaurantCard, { withBestChoiceLabel } from "./RestaurantCard";
import React, { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Offline from "./Offline";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRest, setSearchRest] = useState("");

  const RestaurantBestChoice = withBestChoiceLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();
    let apiData =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setFilteredRestaurants(apiData);
    setListOfRestaurants(apiData);
  };

  if (onlineStatus === false) return <Offline />;

  return listOfRestaurants.length === 0 ? (
    <Shimmer name="body" />
  ) : (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Filter Button */}
        <div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition"
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

        <div>
          <label>UserName : </label>
          <input
            className="border border-black p-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <input
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search restaurants..."
            value={searchRest}
            onChange={(e) => {
              setSearchRest(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md transition"
            onClick={() => {
              const filterserachlist = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchRest.toLowerCase())
              );
              setFilteredRestaurants(filterserachlist);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {filteredRestaurants.map((restaurant) => (
          <React.Fragment key={restaurant.info.id}>
            {restaurant.info.avgRating > 4.5 ? (
              <Link to={"/restaurants/" + restaurant.info.id}>
                <RestaurantBestChoice
                  key={restaurant.info.id}
                  dataObj={restaurant}
                />
              </Link>
            ) : (
              <Link to={"/restaurants/" + restaurant.info.id}>
                <RestaurantCard key={restaurant.info.id} dataObj={restaurant} />
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Body;
