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
    <div className="bg-black h-screen-20 text-gray-200 pt-6 pb-6">
      <div className="flex items-baseline justify-around">
        <section>
          <h1 className="text-4xl font-bold text-white">
            <a className="text-gray-300" href="/">
              TruckDekho
            </a>
          </h1>
        </section>

        <section>
          <ul className="flex justify-center">
            <li className="mt-4 mr-10 font-bold">
              <a href="http://localhost:3000/#home">Home</a>
            </li>
            <li className="mt-4 mr-10 font-bold">
              <a href="http://localhost:3000/#featured">Featured</a>
            </li>
            <li className="mt-4 mr-10 font-bold">
              <a href="#">Contact</a>
            </li>
            <li className="mt-4 mr-10 font-bold">
              <a href="#">About</a>
            </li>
          </ul>
        </section>

        <section className="flex">
          <a className="mr-8" href="/favorites">
            <FontAwesomeIcon className="favorites" icon={faHeart} />
          </a>
          {localStorage.getItem("jwt") ? (
            <button className="mr-6" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <a href="/register" className="mr-2">
              <FontAwesomeIcon icon={faUser} className="user_icon" />
              Login/Register
            </a>
          )}
          <a href="/comparisonTable">
            <button>Compare</button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Header;
