import "./searchItem.scss";
import React from 'react'

const SearchItem = ({props}) => {
  return (
    <div className="searchItem">
      <img src={props.img} alt={props.desc.title} className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{props.desc.title}</h1>
        <span className="siDistance">{props.desc.distance}</span>
        <span className="siTaxiOp">{props.desc.taxiDrop}</span>
        <span className="siSubtitle">{props.desc.subtitle}</span>
        <span className="siFeatures">{props.desc.features}</span>
        <span className="siCancelOp">{props.desc.cancelop}</span>
        <span className="siCancelOpSubtitle">{props.desc.cancelopSubtitle}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{props.details.rating.comment}</span>
          <button>{props.details.rating.score}</button>
        </div>
        <div className="siDeatilsText">
          <span className="siPrice">{props.details.price}</span>
          <span className="siTaxOp">{props.details.tax}</span>
          <button className="siCheckAvailablity">See Availablity</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem