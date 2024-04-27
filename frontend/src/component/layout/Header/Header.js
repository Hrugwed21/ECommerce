import React from 'react'
// import {ReactNavbar} from "overlay-navbar"

// import logo from "../../../images/logo.png";
import "./Header.css";
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userAction';
//import './header2.css';
import { useAlert } from "react-alert";
import { useSelector } from 'react-redux';

const Header = React.memo(() => {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const alert = useAlert();
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
      <div className="navigation">
        <div className="container">
          <nav className="nav__center">
            <div className="nav__header">
              <div className="nav__logo">
                <h1><span>ECO</span>FUNDS</h1>
              </div>
              <div className="nav__hamburger">
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-menu"></use>
                  </svg>
                </span>
              </div>
            </div>
            <div className="nav__menu">
              <div className="menu__top">
                <h1 className="nav__category">SHOPI<span>Q</span></h1>
                <div className="close__toggle">
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-cross"></use>
                  </svg>
                </div>
              </div>
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="/" className="nav__link scroll-link">Home</a>
                </li>
                <li className="nav__item">
                  <a href="/products" className="nav__link scroll-link">Products</a>
                </li>
                <li className="nav__item">
                  <a href="/search" className="nav__link scroll-link">Search</a>
                </li>
                <li className="nav__item">
                  <a href="/contact" className="nav__link scroll-link">Contact</a>
                </li>
                <li className="nav__item">
                  <a href="/login" className="nav__link">Login</a>
                </li>
                {isAuthenticated && 
                <li>
                <div className="dropdown">
            <button className="dropbtn">UserOptions</button>
            <div className="dropdown-content">
              <a href="/orders">Orders</a>
              <a href="/cart">Cart</a>
              <a href="#" onClick={logoutUser}>Logout</a>
              {user.role === 'admin' &&
               <a href="/dashboard" onClick={logoutUser}>Dashboard</a>
              }
            </div>
          </div> 
          </li>}
              </ul>
              <ul className="nav__icons1">
                {/* <a href="#" className="icon__item">
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-search"></use>
                  </svg>
                </a> */}
                <a href="/account" className="icon__item">
                <img src="./Profile.png" alt="Profile" />
                </a>
                {/* <a href="#" className="icon__item">
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-shopping-basket"></use>
                  </svg>
                  <span>2</span>
                </a> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
  )
});

export default Header