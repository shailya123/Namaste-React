import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
const Body = () => {

  const [listofRes, setListOfRes] = useState(resData);
  const filterTopRes = () => {
    setListOfRes(resData.filter((res) => res.rating >= 4))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
    mode:'no-cors'
    }
    );
    const json = await data.json();
    console.log(json);
  }

  return (
    <div className="body">
      <div className="search">
        <span>Search</span>
        <button className="filter-btn" onClick={filterTopRes}>Top Restaurant</button>
      </div>
      <div className="res-container">
        {
          listofRes?.map((res) => <RestaurantCard key={res.id} resData={res} />)
        }
      </div>
    </div>
  );
}

export default Body;