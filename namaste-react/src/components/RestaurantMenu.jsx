import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useRestaurantsMenu from '../hooks/useRestaurantsMenu';
import MenuItem from './MenuItem';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, menu, category] = useRestaurantsMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    return (
        <>
            <div className='flex items-center gap-4 flex-col w-full overflow-y-auto max-h-[48rem] '>
                {menu?.length < 1 ? (
                    Array.from({ length: 5 }, (_, index) => <Shimmer key={index} resId={true} />)
                ) : <div className='p-4 flex-col flex  gap-8 w-full'>
                    <div className='flex justify-start flex-col sticky gap-2'>
                        <Link to='/' className='text-xl capitalize text-green-300'>{'<-'} Back</Link>
                        <h1 className='text-4xl font-bold capitalize'>{resInfo.name}</h1>
                        <p className='text-xl font-semibold capitalize'>{resInfo.cuisines.join(" ")} - {resInfo.costForTwoMessage}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full'>
                        {category.map((item, idx) => (
                            <MenuItem key={item.card.card?.title} item={item.card?.card} showItems={idx === showIndex} setShowIndex={() => setShowIndex(idx === showIndex ? null : idx)} />
                        ))
                        }
                    </div>
                </div>
                }
            </div>
        </>
    );
};

export default RestaurantMenu;
