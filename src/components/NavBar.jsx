import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo"; 
import "../App.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Logo />
      </div>
      <div className="navbar-right">
        <ul className="menu-list">
          <li>
            <NavLink to="/" activeClassName="active-link" className="menu-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" activeClassName="active-link" className="menu-item">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/genre" activeClassName="active-link" className="menu-item">
              Genre
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName="active-link" className="menu-item">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName="active-link" className="menu-item">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/tv-shows" activeClassName="active-link" className="menu-item">
              Tv Shows
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
