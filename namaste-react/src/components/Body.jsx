import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {

  const [listofRes, setListOfRes] = useState([]);
  const [originalListofRes, setOriginalListofRes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const filterTopRes = () => {
    setListOfRes(resData.filter((res) => res.rating >= 4))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://random-data-api.com/api/restaurant/random_restaurant?size=10"
    );
    const json = await data.json();
    setListOfRes(json);
    setOriginalListofRes(json)
  }

  const searchByName=()=>{
    const list= originalListofRes.filter((x)=>x.name.toLowerCase().includes(searchText.toLowerCase()));
    setListOfRes(list);
  }
  
    if (listofRes?.length === 0) {
      return <Shimmer />
    }

  return (
    <div className="body">
      <div className="search">
        <div style={{display:"flex", gap:6}}>
          <input type="text" placeholder="search..." value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          <button onClick={searchByName}>Search</button>
        <button className="filter-btn" onClick={filterTopRes}>Top Restaurant</button>
        </div>
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