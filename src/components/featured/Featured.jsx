import React from "react";
import properties from "../../data/propertyList";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      {properties.map((property, index) => {
        return (
          <div key={index} className="featuredItem">
            <img src={property.imgsrc} alt={property.city} className="featuredImg" />
            <div className="featuredTitle">
              <h1>{property.city}</h1>
              <h2>{property.id} Properties</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
