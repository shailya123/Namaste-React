import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './Itemlist';
import { clearCart } from '../slices/cartSlice';

const Cart = () => {
    const addedMenuItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='text-center m-10 p-10'>
            <h1 className='text-4xl font-bold'>Your Cart</h1>
            <div className={`${addedMenuItem.length} < 1?'':'shadow-lg rounded-lg' `}>
                {addedMenuItem.length < 1 ?
                    <h1 className='text-2xl my-4'>Your Cart is Empty</h1>
                    :
                    <>
                        <div className='max-w-6xl max-h-6xl rounded-lg shadow-lg'>
                            <ItemList item={addedMenuItem} showAddButton={false} />
                        </div>
                        <div className='flex justify-center'>
                            <button className='p-2 m-2 bg-white text-green-300 rounded-lg shadow-md ' onClick={handleClearCart}>Clear cart</button>

                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Cart
