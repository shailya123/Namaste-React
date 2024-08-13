import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import UserContext from './utils/UserContext';
import { useState } from 'react';

const App = () => {

  const [userName,setUserName]=useState('shailya');
  return(
  <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <Header />
    <Outlet />
  </UserContext.Provider>
  )
}

export default App
