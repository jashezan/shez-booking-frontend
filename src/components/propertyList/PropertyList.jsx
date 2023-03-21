import React from "react";
import "./propertyList.scss";
import hotelInfo from "../../data/hotelImages";
import { Link } from "react-router-dom";

const PropertyList = () => {
  return (
    <div className="pList">
      {hotelInfo.map((hotel, index) => {
        return (
          <div key={index} className="pListItem">
            <Link to={`/hotels/${index + 1}`}>
              <img src={hotel.imgsrc} alt={hotel.name} className="pListImg" />
            </Link>
            <div className="pListTitle">
              <h1>{hotel.name}</h1>
              <h2>{hotel.address}, Chondrima Lane </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyList;
