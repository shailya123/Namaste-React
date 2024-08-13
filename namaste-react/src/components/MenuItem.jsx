import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import ItemList from './Itemlist';

const MenuItem = ({ item,showItems,setShowIndex }) => {
    const handleAccordianClick=()=>
    {
        setShowIndex();
        console.log("called");
    }
    return (
        <div className='w-[50rem]'>
            <div onClick={handleAccordianClick} className='flex justify-between mx-auto my-4 bg-gray-50 shadow-lg p-4'>
                <span className='font-bold capitalize' >{item.title} ({item.itemCards.length})</span>
                <span><FaAngleDown /></span>
            </div>
            {showItems && <ItemList item={item.itemCards} />}
        </div>
    )
}

export default MenuItem
