/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from '../firebase';

// functional component
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
    else {
      
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search"
        ></input>
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
      <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header__option">
        <span className="header__optionlineone">Hello, guest</span>
          <span className="header__optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
          </Link>
        <div className="header__option">
          <span className="header__optionlineone">Returns</span>
          <span className="header__optionlinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <dic className="header__cartIcon">
            <AddShoppingCartIcon className="header__shoppingCart" />
            <span className="header__optionlinetwo header__basketCount">
              {basket?.length}
            </span>
          </dic>
        </Link>
      </div>
    </div>
  );
}

export default Header;
