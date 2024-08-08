import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from '../hooks/useRestaurantsMenu';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [resInfo,menu]=useRestaurantsMenu(resId);
    if (resInfo === null) return <Shimmer />

    return (
        <div>
            <h1>{resInfo.name}</h1>
            <p>{resInfo.cuisines.join(" ")} - {resInfo.costForTwoMessage}</p>
            <div>
                <ul>
                    {menu.map((item) =>
                        <li key={item.card.info?.id}>{item?.card?.info?.name} -Rs. {item.card.info.defaultPrice / 100 || item.card?.info?.price / 100}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu
