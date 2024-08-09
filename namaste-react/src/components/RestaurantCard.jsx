import React from 'react'
import { CDN_URL } from '../utils/contants';

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } = resData.info;
  return (
    <div className="p-6 gap-4 w-64 bg-white shadow-xl flex flex-col h-96 rounded-md item-center justify-center hover:bg-black/10 active:bg-black/10 focus:outline-none focus:ring">
      <div className='flex justify-center items-center'>
        <img className="rounded-md h-32 w-32" src={CDN_URL + cloudinaryImageId} />
      </div>
      <h3 className='font-bold self-center'>{name}</h3>
      <div className="flex gap-2 flex-col justify-center items-center">
        <p className='flex flex-wrap w-52'> {cuisines.join(',')}</p>
        <h4>{+avgRating}</h4>
        <h4 className='font-bold'>{costForTwo}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;