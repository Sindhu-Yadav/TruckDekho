import React from "react";
import "./Header.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/fontawesome-free-regular";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth_context";

const Header = () => {
  const Navigate = useNavigate();

  const { logout } = useAuth();
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
    <ul className="heading top-nav">
      <li className="top-nav">
        <div className="logo">
          <a href="/">Josh Riders</a>
        </div>
      </li>

      <li className="top-nav">
        <a href="http://localhost:3000/#home">Home</a>
      </li>
      <li className="top-nav">
        <a href="http://localhost:3000/#featured">Featured</a>
      </li>
      <li className="top-nav">
        <a href="#">Contact</a>
      </li>
      <li className="top-nav">
        <a href="#">About</a>
      </li>
      <li className="top-nav">
        {" "}
        <a href="/comparisonTable">
          <button className="btn">Compare</button>
        </a>
      </li>

      <li className="right_menu top-nav">
        <a href="/favorites">
          <FontAwesomeIcon className="favorites" icon={faHeart} />
        </a>
      </li>
      {localStorage.getItem("jwt") ? (
        <button className="logout_btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <li className="right_menu top-nav">
          <a href="/registerchoice">
            <FontAwesomeIcon icon={faUser} className="user_icon" />
            &nbsp;Login/Register
          </a>
        </li>
      )}
    </ul>
  );
};

export default Header;
