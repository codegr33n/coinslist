import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

// CSS
import "./Navbar.css";
const Navbar = () => {
  return (
    <Link to="/">
      <div className="navBar">
        <FaCoins className="icon" />
        <h1>
          Coins <span className="purple">List</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
