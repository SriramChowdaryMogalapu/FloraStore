import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../assets/logo.png"
import './Navbar.css'
function Navbar() {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <div>
      <nav className="navbar">
        <div className="tag">
          <div className="luxury">
            <img
              src={logo}
              alt="E-Plant"
            />
            &nbsp;&nbsp;
            <div>
              <h3 style={{ color: 'white' }}>Harmony Gardens</h3>
              <i style={{ color: 'white' }}>Balancing Beauty and Wellness</i>
            </div>
          </div>
        </div>
        <div className="nav">
        <Link to="/" style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}>
            Home
          </Link>
        </div>
        <div className="nav">
          <Link to="/products" style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}>
            Plants
          </Link>
        </div>
        <div className="nav">
          <Link
            to="/cart"
            style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}
          >
            <text
              x="110"
              y="220"
              fill="red"
              fontSize="30"
              className="cart_quantity_count"
            >
              {cartCount}
            </text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              height="68"
              width="80"
            >
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12" id="circle"></circle>
              <circle cx="184" cy="216" r="12" id="circle"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="#faf9f9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
