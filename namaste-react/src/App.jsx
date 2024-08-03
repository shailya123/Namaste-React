import './App.css'
import About from './components/About';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App
