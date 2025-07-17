import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
const RestaurantCard = (props) => {
  const { dataObj } = props;

  const { name, cuisines, avgRatingString, sla, id } = dataObj.info;

  return (
    <Link to={"/restaurants/" + id}>
      <div className="res-card">
        <img
          className="card-img"
          alt="res-img"
          src={CDN_URL + dataObj.info.cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating: {avgRatingString}</h4>
        <h4>{sla.slaString} min delivery </h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
