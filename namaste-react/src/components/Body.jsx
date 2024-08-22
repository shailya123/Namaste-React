import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { resData } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../hooks/useInternetStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRes, setListOfRes] = useState([]);
  const [originalListofRes, setOriginalListofRes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const isOnline = useInternetStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const filterTopRes = () => {
    setListOfRes(originalListofRes.filter((res) => +res.info.avgRating >= 4.5));
  };

  const fetchData = async () => {
    const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.434842&lng=80.3016703&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res = await data1.json();
    setListOfRes(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setOriginalListofRes(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const searchByName = () => {
    const list = originalListofRes.filter((x) =>
      x.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRes(list);
  };

  if (listofRes?.length === 0) {
    return <Shimmer />;
  }

  return !isOnline ? (
    <div className="flex justify-center items-center">
      <h1>You are offline!! Please check your internet connection</h1>
    </div>
  ) : (
    <div className="body">
      <div className="search m-4 p-4">
        <div className="flex gap-4">
          <input
            className="rounded-lg border border-solid border-black p-2"
            type="text"
            placeholder="search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="flex gap-4">
            <button
              onClick={searchByName}
              className="px-2 bg-green-100 py-1 rounded-lg hover:shadow-lg hover:bg-green-400"
            >
              Search
            </button>
            <button
              className="px-2 bg-gray-100 py-1 rounded-lg hover:shadow-lg hover:bg-gray-400"
              onClick={filterTopRes}
            >
              Top Restaurant
            </button>
          </div>
          {/* <input
            className="rounded-lg border border-solid border-black p-2"
            type="text"
            placeholder="search..."
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {listofRes?.map((res) => (
          <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
            {res.info.avgRating >= 4.3 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
