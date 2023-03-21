import React, { useState } from "react";
import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <form className="lsSearchItem">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label htmlFor="">Destination</label>
                <input type="text" name="" id="" placeholder={destination} />
              </div>
              <div className="lsItem">
                <label htmlFor="">Check In Date</label>
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >
                  {`${format(date[0].startDate, "yyyy-MM-dd")} to ${format(
                    date[0].endDate,
                    "yyyy-MM-dd"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    ranges={date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="lsItem">
                <label htmlFor="">Options</label>
                <div className="lsOptions">
                  <div className="lsOptionsItem">
                    <span htmlFor="minprice" className="lsOptionText">
                      Min Price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      name="minPrice"
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionsItem">
                    <span htmlFor="maxprice" className="lsOptionText">
                      Max Price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      name="maxPrice"
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionsItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      name="adultNumber"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionsItem">
                    <span className="lsOptionText">Child</span>
                    <input
                      type="number"
                      name="childNumber"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionsItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      name="roomNumber"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
