import React from "react";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as UserIcon } from "../assets/svg/user.svg";
import { ReactComponent as CartIcon } from "../assets/svg/shopping-cart.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";

class ScrollNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.scrollFunction = this.scrollFunction.bind(this);
    this.toggleNavState = this.toggleNavState.bind(this);

    this.state = {
      showNavigation: true,
    };
  }

  // Toggl fixed navbar when scroll
  scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("scroll-navbar-wrapper").style.top = "0";
    } else {
      document.getElementById("scroll-navbar-wrapper").style.top = "-100%";
    }
  }
  componentDidMount() {
    window.onscroll = this.scrollFunction;
  }

  toggleNavState() {
    this.setState({ showNavigation: !this.state.showNavigation });
  }

  render() {
    return (
      <div id="scroll-navbar-wrapper">
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
  }
}

export default ScrollNavbar;
