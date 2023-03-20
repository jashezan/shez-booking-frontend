import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navContainer">
        <div className="logo">shezBooking</div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
