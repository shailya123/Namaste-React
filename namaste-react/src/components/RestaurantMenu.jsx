import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useRestaurantsMenu from '../hooks/useRestaurantsMenu';
import MenuItem from './MenuItem';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [resInfo, menu] = useRestaurantsMenu(resId);
    if (resInfo === null) return <Shimmer resId={true} />

    return (
        <div className='p-4 flex-col flex gap-4'>
            <Link to='/' className='text-xl capitalize text-green-300'>{'<-'} Back</Link>
            <h1 className='text-4xl font-bold capitalize'>{resInfo.name}</h1>
            <p className='text-2xl font-semibold capitalize'>{resInfo.cuisines.join(" ")} - {resInfo.costForTwoMessage}</p>
            <div className='flex items-center gap-4 flex-col w-full overflow-y-auto h-[37rem] '>
                {menu.map((item) => <MenuItem key={item.card.info?.id} item={item} />
                )}
            </div>
        </div>
    )
}

export default RestaurantMenu
