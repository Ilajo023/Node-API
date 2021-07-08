import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = () => {

    return (
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <NavLink to="/" className="navbar-brand">Shop API</NavLink>
        <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <NavLink to="/lists" className="nav-link">Lists</NavLink>
          </li>
          <li className="navbar-item">
          <NavLink to="/shops" className="nav-link">Shops</NavLink>
          </li>
          <li className="navbar-item">
          <NavLink to="/categories" className="nav-link">Categories</NavLink>
          </li>
        </ul>
        </div>
      </nav>
        
    );
}

export default Nav;

