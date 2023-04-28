
import './App.css'
import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  
  const auth = useSelector((state:any)=> state.auth);

  return (
<div className="container mt-5">
      <h2 className="mb-3">React Lazy Loading Routes Example: {auth.name}</h2>
      <nav>
        | <NavLink to="/home">Home</NavLink> 
        | <NavLink to="/screenone">Screen</NavLink> 
        | <NavLink to="/screenone/5">Screen params</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
