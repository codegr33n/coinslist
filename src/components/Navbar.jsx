import React from "react";
import { FaCoins } from "react-icons/fa";

// CSS
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navBar">
        <FaCoins className="icon" />
        <h1>
          Green <span className="purple">Finder</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
 