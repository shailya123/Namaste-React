import React, { useMemo } from 'react'
import { LOGO_URL } from '../utils/contants';
import { Link, useLocation } from 'react-router-dom';
import useInternetStatus from '../hooks/useInternetStatus';
const Header = () => {

  const isOnline = useInternetStatus();
  const path = useLocation();

  const pathname = useMemo(() => path, [path]);
  return (
    <div className='flex justify-between items-center bg-green-100 bg-gradient-to-tr p-4 shadow-lg mb-2 px-2'>
      <div className=''>
        <Link to={'/'}>
          <img className='w-28' src={LOGO_URL} style={{ mixBlendMode: 'darken' }} />
        </Link>
      </div>
      <div className='p-2 flex items-center'>
        <ul className='flex gap-10 text-lg'>
          <li className={`${isOnline ? 'bg-green-500 rounded-full' : 'bg-red-500 '} self-center rounded-full h-5 w-5`} />
          <li className={`${(pathname.pathname === '/' || pathname.pathname.includes('/restaurants/')) ? 'font-bold' : 'font-normal'} hover:font-bold`}><Link to='/'>Home</Link></li>
          <li className={`${pathname.pathname === '/About' ? 'font-bold' : 'font-normal'} hover:font-bold`}> <Link to='/About'>About</Link></li>
          <li className={`${pathname.pathname === '/Contact' ? 'font-bold' : 'font-normal'} hover:font-bold`}><Link to='Contact'>Contact Us</Link></li>
          <li className={`${pathname.pathname === '/Grocery' ? 'font-bold' : 'font-normal'} hover:font-bold`}><Link to='grocery'>Grocery</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header