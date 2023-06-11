import React from 'react'
import logo from './logo.png'
import './App.css'
import { Outlet, Link } from "react-router-dom";
const Navbar=()=> {
  return (
<>
 <nav className="navbar navbar-expand-lg flex bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <img  className='city-icon1' src={logo} type='image/png' alt='none'/>  <a className="navbar-brand" href="/">Weather</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='clicker' to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="clicker" to="/about">About</Link>
        </li>
      </ul>
     
    
    </div>
  </div>
</nav>
<Outlet/>
 </>
  )
}
export default Navbar;