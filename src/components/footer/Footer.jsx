import React from "react";
import "./footer.scss";
import footerList from "../../data/footerList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="fLists">
        {footerList.map((list, index) => {
          return (
            <ul className="fList" key={index}>
              {list.map((item, idx) => {
                return (
                  <div className="fListItem" key={idx}>
                    {item.name}
                  </div>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="fText">Copyright @ 2023 Shez Booking.</div>
    </footer>
  );
};

export default Footer;
