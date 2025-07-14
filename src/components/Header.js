import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [click, setClick] = useState("Login");

  console.log("Header Rendered");

 useEffect(() => {
    console.log("useeffect Rendered");
  }, [click]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
          className="login-btn"
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
