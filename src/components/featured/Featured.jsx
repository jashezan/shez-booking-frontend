import React from "react";
import properties from "../../data/propertyList";
import "./featured.scss";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured">
      {properties.map((property, index) => {
        return (
          <div key={index} className="featuredItem">
            <Link to={`/hotels/${index + 1}`}>
              <img
                src={property.imgsrc}
                alt={property.city}
                className="featuredImg"
              />
            </Link>
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
