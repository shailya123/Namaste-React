import React, { useEffect, useState } from 'react'
import { MENU_API } from '../utils/contants';

const useRestaurantsMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
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
    return [resInfo,menu];
}

export default useRestaurantsMenu;
