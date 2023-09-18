import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/fontawesome-free-regular";

const Header = () => {
  return (
    <div className="header">
      <h1 className="left">
        <a className="icon" href="/home">
          TruckDekho
        </a>
      </h1>
      <form className="middle" action="submit" method="get">
        <input type="text" placeholder="Search Trucks" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="right">
      <button className="favorites_button">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <a href="/register" className="register_page_button">
      <FontAwesomeIcon icon={faUser} />
      Login/Register
      </a>
      </div>
    </div>
  );
};

export default Header;
