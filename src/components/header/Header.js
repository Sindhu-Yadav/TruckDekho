import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/fontawesome-free-regular";

const Header = () => {
  return (
    <div className="header">
      <div className="header_upper">  
      <section className="left_header">
        <h1>
          <a className="icon" href="/home">
            TruckDekho
          </a>
        </h1>
      </section>
      
      <section className="middle_header">
        <input
          className="search_input"
          type="text"
          placeholder="Search Trucks"
        /> 
        <button className="search_button">
          <FontAwesomeIcon className="search_icon" icon={faSearch} />
        </button>
      </section>
      
      <section className="right_header">
        <a href="/favorites">
          <FontAwesomeIcon className="favorites" icon={faHeart} />
        </a>
        <a href="/register" className="register_page_button">
          <FontAwesomeIcon icon={faUser} className="user_icon"/>
          Login/Register
        </a>
      </section>
      </div>
      <div className="header_lower">
        <ul className="navbar">
          <li className="navbar_item"><a href="#home">Home</a></li>
          <li className="navbar_item"><a href="#featured">Featured</a></li>
          <li className="navbar_item"><a href=""></a>Contact</li>
          <li className="navbar_item"><a href=""></a>About</li>
        </ul>
        <section className="line"></section>
      </div>
    </div>
  );
};

export default Header;
