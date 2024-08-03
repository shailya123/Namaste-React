import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

  const [listofRes, setListOfRes] = useState([]);
  const [originalListofRes, setOriginalListofRes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const filterTopRes = () => {
    setListOfRes(resData.filter((res) => res.info.avgRating >= 4))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const res = await data1.json();
    setListOfRes(res?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setOriginalListofRes(res?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const searchByName = () => {
    const list = originalListofRes.filter((x) => x.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setListOfRes(list);
  }

  if (listofRes?.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="search">
        <div style={{ display: "flex", gap: 6 }}>
          <input type="text" placeholder="search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={searchByName}>Search</button>
          <button className="filter-btn" onClick={filterTopRes}>Top Restaurant</button>
        </div>
      </div>
      <div className="res-container">
        {
          listofRes?.map((res) => <Link to={`/restaurants/${res.info.id}`} key={res.info.id} ><RestaurantCard resData={res} /></Link> )
        }
      </div>
    </div>
  );
}

export default Body;