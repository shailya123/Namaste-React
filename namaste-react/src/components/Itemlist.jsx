import React, { useState } from 'react'
import { CDN_URL } from '../utils/contants';

const ItemList = ({ item }) => {
  const [addItem,setAddItem]=useState(null);
    return (
        <div>
            {item.map(item =>
                <div key={item.card.info.id} className='flex justify-between p-2 m-2 border-b-2 border-gray-200 text-left'>
                    <div className='flex flex-col gap-2 font-semibold w-3/4'>
                        <span className='text-lg'>{item.card.info?.name}</span>
                        <span>- ₹{item.card.info?.price / 100 || item.card.info?.defaultPrice / 100}</span>
                        <p className='text-xs'>{item.card.info?.description}</p>
                    </div>
                    <div className="relative">
                        <img src={CDN_URL + item.card.info?.imageId} className="w-28 h-28 rounded-lg" />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-2">
                            <button className="text-green-500 px-2 p-2 bg-white shadow-lg rounded-lg" onClick={()=>setAddItem((addItem)=>addItem+1)}>Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemList;

