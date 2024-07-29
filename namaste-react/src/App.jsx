import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App1 = () => (
  <div>
    <h1>
      Hello title
    </h1>
  </div>
);
//This is componenet composition
const App = () => (
  <div><App1 />
    Hello User
  </div>
);

export default App
