import { useEffect, useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [click, setClick] = useState("Login");
  const onlineStatus = useOnlineStatus();
 

  useEffect(() => {
    console.log("useeffect Rendered");
  }, [click]);

const {loggedInUser} = useContext(UserContext);
const cartItems = useSelector((store)=> store.cart.items)
console.log(cartItems);
 return (
  <div className="bg-white shadow-md sticky top-0 z-50 flex justify-between items-center px-6 py-3">
    <div className="flex items-center">
      <img className="h-20 w-auto" src={LOGO_URL} alt="Logo" />
    </div>

    <div className="flex items-center gap-6">
      <ul className="flex items-center gap-6 text-gray-700 font-medium">
        <li>
          Online Status : {onlineStatus ? "🟢" : "🔴"}
        </li>
        <li>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-blue-500">Cart ({cartItems.length} Items)</Link>
        </li>
        <li>
          <Link to="/grocery" className="hover:text-blue-500">Grocery</Link>
        </li>
        <li>
          <Link to="/" className="font-bold">{loggedInUser}</Link>
        </li>
      </ul>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        onClick={() => {
          click === "Login" ? setClick("Log Out") : setClick("Login");
        }}
      >
        {click}
      </button>
    </div>
  </div>
);

};

export default Header;
