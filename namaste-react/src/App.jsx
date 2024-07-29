import './App.css'


const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCrtmEN9vahUD5tHWmx8MXdQycacsG0bfNg&s" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCard = ({resName}) => {
  return (
    <div className="res-card">
      <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kbGMiGWKFWDXv-LxYA-BIMwNXIWrdOCk1g&s" />
      <h3>{resName}</h3>
      <div className="card-items">
        <h4> Patties, chinese</h4>
        <h4> 4.4 stars</h4>
        <h4> 38 Minutes</h4>
      </div>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <RestaurantCard resName="chauuhan pandit patties"/>
        <RestaurantCard resName="foody goody"/>
      </div>
    </div>
  );
}

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

export default App
