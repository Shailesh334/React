import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemCards = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(data));
  };
  return (
    <div className="w-full py-6 border-b-1 border-gray-200 flex justify-between align-middle">
      <div className="w-9/12">
        <div className=" font-medium">{data.name}</div>
        <div className="font-medium">
          ₹ {data.price ? data.price / 100 : data.defaultPrice / 100}
        </div>
        <p className="text-sm">{data.description}</p>
      </div>
      <div className="w-3/12 ">
        <button
          className="absolute p-2 bg-white text-green-500 rounded-lg w-15 mx-12 my-31 border-gray-500 border-1 hover:bg-green-400 hover:text-white hover:pointer-hand cursor-pointer"
          onClick={handleAddItem}
        >
          ADD
        </button>
        <img
          className="rounded-lg w-[153px] h-[144px] "
          src={CDN_URL + data.imageId}
        ></img>
      </div>
    </div>
  );
};

export default ItemCards;
