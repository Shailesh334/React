import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
      
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
