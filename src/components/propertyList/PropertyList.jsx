import React from "react";
import "./propertyList.scss";
import hotelInfo from "../../data/hotelImages";

const PropertyList = () => {
  return (
    <div className="pList">
      {hotelInfo.map((hotel, index) => {
        return (
          <div key={index} className="pListItem">
            <img src={hotel.imgsrc} alt={hotel.name} className="pListImg" />
            <div className="pListTitle">
              <h1>{hotel.name}</h1>
              <h2>{hotel.address}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyList;
