import React from 'react'
import { LOGO_URL } from '../utils/contants';
import { Link } from 'react-router-dom';
import useInternetStatus from '../hooks/useInternetStatus';
const Header = () => {

  const isOnline = useInternetStatus();
  return (
    <div className='header'>
      <div className='logo'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          {isOnline ? <li style={{ width: 5, height: 5, borderRadius: 50, backgroundColor: 'green' }} />
            : <licls
              style={{ width: 5, height: 5, borderRadius: 50, backgroundColor: 'red' }} />}
          <li ><Link to='/'>Home</Link></li>
          <li> <Link to='/About'>About</Link></li>
          <li><Link to='Contact'>Contact Us</Link></li>
          <li><Link to='grocery'>Grocery</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header