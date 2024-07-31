import React from 'react'
const RestaurantCard = ({ resData }) => {
  const { resName, rating, cuisine, deliveryInMinutes, priceForTwo } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kbGMiGWKFWDXv-LxYA-BIMwNXIWrdOCk1g&s" />
      <h3>{resName}</h3>
      <div className="card-items">
        <h4> {cuisine}</h4>
        <h4> {rating} stars</h4>
        <h4> {deliveryInMinutes} Minutes</h4>
        <h4> {priceForTwo}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;