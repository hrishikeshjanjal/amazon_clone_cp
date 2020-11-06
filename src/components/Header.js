import React from "react";
import "../assets/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue(); //acquire data from datalayer
  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
          className="header_logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        {/*Logo search icon */}
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_lineOne">
              Hello, <span> {user?.email}</span>
            </span>
            <span className="header_option_lineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_option_lineOne">Returns</span>
            <span className="header_option_lineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_option_lineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
