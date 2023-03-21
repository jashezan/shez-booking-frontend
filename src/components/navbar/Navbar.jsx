import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navContainer">
        <div className="logo">
          <Link to="/">Shez Booking</Link>
        </div>
        <div className="navItems">
          <button className="navButton">
            <Link to={"/register"}>Register</Link>
          </button>
          <button className="navButton">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
