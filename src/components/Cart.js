import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handelClearItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" w-6/12 p-4 m-auto ">
      <h1 className="font-bold text-lg m-auto text-center">Cart</h1>
      <button
        className="bg-gray-500 hover:bg-black text-white font-medium px-4 py-2 rounded-md transition "
        onClick={handelClearItems}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="text-lg m-auto text-center">
          Cart is Empty !
        </h1>
      )}
      <div className="">
        {cartItems.map((item) => (
          <ItemCards key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
