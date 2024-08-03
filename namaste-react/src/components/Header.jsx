import React from 'react'
import { LOGO_URL } from '../utils/contants';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li ><Link to='/'>Home</Link></li>
          <li> <Link to='/About'>About</Link></li>
          <li><Link to='Contact'>Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header