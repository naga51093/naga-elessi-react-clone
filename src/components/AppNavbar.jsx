import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/svg/user.svg";
import { ReactComponent as CartIcon } from "../assets/svg/shopping-cart.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";

const AppNavbar = () => {
  return (
    <div className="app-navbar-wrapper">
      <ul className="app-natigator-wrapper">
        <NavLink to="/" exact activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/shop" activeClassName="active-link">
          Shop
        </NavLink>
        <NavLink to="/services" activeClassName="active-link">
          Services
        </NavLink>
        <NavLink to="/about-us" activeClassName="active-link">
          About Us
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link">
          Contact
        </NavLink>
      </ul>
      <div className="app-logo">
        <h3>Logo</h3>
      </div>
      <ul className="navbar-right-side">
        <div className="search-product">
          <SearchIcon />
        </div>
        <Link to="/user">
          <UserIcon />
        </Link>
        <div className="icon-wrapper">
          <Link to="/cart">
            <CartIcon />
            <span className="count">0</span>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default AppNavbar;
