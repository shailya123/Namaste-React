import React, { useEffect, useState } from 'react'
import { MENU_API } from '../utils/contants';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data.cards[2]?.card?.card?.info);
        setMenu(json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    }


    if (resInfo === null) return <Shimmer />

    return (
        <div>
            <h1>{resInfo.name}</h1>
            <p>{resInfo.cuisines.join(" ")} - {resInfo.costForTwoMessage}</p>
            <div>
                <ul>
                    {menu.map((item) =>
                        <li key={item.card.info.id}>{item.card.info.name} -Rs. {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu
