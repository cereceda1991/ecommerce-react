import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className='container__header'>
      <h3>
        <Link to="/">e-commerce</Link>
      </h3 >
      <nav >
        <ul >
          <li>
            <Link to="/login">
              <i className="fa-regular fa-user icon-header"></i>
            </Link>
          </li>
          <li >
            <Link to="/purchases">
              <i className="fa-solid fa-box-archive icon-header"></i>
            </Link>
          </li>
          <li >
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping icon-header"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;