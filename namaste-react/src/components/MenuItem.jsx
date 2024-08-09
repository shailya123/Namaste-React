import React, { useState } from 'react';
import { CDN_URL } from '../utils/contants';

const MenuItem = ({ item }) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    };

    const decrement = () => {
        setCount(count => count - 1);
    };

    return (
        <div class="w-[50rem] rounded shadow-lg flex h-36 justify-between p-2" >
            <img class="w-24 h-24 rounded-xl" src={CDN_URL + item.card.info?.imageId} alt="Sunset in the mountains" />
            <div class="px-6 py-4 justify-center gap-2 flex flex-col">
                <h2 class="font-bold text-xl mb-2 flex-warp">{item?.card?.info?.name}</h2>

                <div className="flex items-center space-x-4 justify-end">
                    <button
                        onClick={decrement}
                        className="bg-red-200 text-black font-bold py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200">
                        -
                    </button>
                    <span className="text-2xl font-semibold text-gray-800">{count}</span>
                    <button
                        onClick={increment}
                        className="bg-green-200 text-black font-bold py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200">
                        +
                    </button>
                </div>
                <p class="text-gray-700 text-base text-right font-semibold">
                    Rs. {item.card.info.defaultPrice / 100 || item.card?.info?.price / 100}
                </p>
            </div>
        </div>
    )
}

export default MenuItem
