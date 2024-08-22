import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import UserContext from './utils/UserContext';
import { useState } from 'react';
import {Provider} from 'react-redux'
import store from './utils/store';
const App = () => {

  const [userName, setUserName] = useState('shailya');
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  )
}

export default App
