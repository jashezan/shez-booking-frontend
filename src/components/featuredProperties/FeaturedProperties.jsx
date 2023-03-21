import React from "react";
import { Link } from "react-router-dom";
import fpList from "../../data/fpList";

import "./featuredProperties.scss";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      {fpList.map((item, index) => {
        return (
          <div key={index} className="fpItem">
            <Link to={`/hotels/${index + 1}`}>
              <img src={item.photos} alt={item.name} className="fpImg" />
            </Link>
            <span className="fpName"> {item.name} </span>
            <span className="fpCity"> {item.city} </span>
            <span className="fpPrice"> ${item.cheapestPrince} </span>
            <div className="fpRating">
              <button>{item.rating.score}</button>
              <span> {item.rating.comment} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProperties;
