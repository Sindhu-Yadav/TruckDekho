import React from "react";
import "./Header.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/fontawesome-free-regular";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/auth_context';

const Header = () => {
  const Navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();
  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/logout")
      .then(() => {
        logout();
        Navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="header">
      <div className="header_upper">
        <section className="left_header">
          <h1>
            <a className="icon" href="/">
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
          {isAuthenticated ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <a href="/register" className="register_page_button">
              <FontAwesomeIcon icon={faUser} className="user_icon" />
              Login/Register
            </a>
          )}
        </section>
      </div>
      <div className="header_lower">
        <ul className="navbar">
          <li className="navbar_item">
            <a href="http://localhost:3000/#home">Home</a>
          </li>
          <li className="navbar_item">
            <a href="http://localhost:3000/#featured">Featured</a>
          </li>
          <li className="navbar_item">
            <a href=""></a>Contact
          </li>
          <li className="navbar_item">
            <a href=""></a>About
          </li>
        </ul>
        <section className="line"></section>
      </div>
    </div>
  );
};

export default Header;
