import React from "react";
import "./mailList.scss";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <form className="mailInput">
        <input type="email" name="mern-booking-email" id="" placeholder="Your Email Here" required/>
        <button type="submit" >Subscribe</button>
      </form>
    </div>
  );
};

export default MailList;
