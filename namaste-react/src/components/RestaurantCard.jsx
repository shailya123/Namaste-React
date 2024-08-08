import React from 'react'
import { CDN_URL } from '../utils/contants';

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <div>
        <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <div className="card-items">
        <h4> {cuisines.join(',')}</h4>
        <h4>{+avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;