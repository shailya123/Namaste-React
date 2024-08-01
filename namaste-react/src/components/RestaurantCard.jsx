import React from 'react'
const RestaurantCard = ({ resData }) => {
  const { name, type,logo} = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={logo} />
      <h3>{name}</h3>
      <div className="card-items">
        <h4> {type},</h4>
        <h4>&nbsp; {Math.floor(Math.random()*5)} stars</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;