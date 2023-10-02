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
    <div className="heading ">
      <div className="">
        <section>
          <h1 className="d">
            <a className="text-gray-300" href="/">
              Josh Riders
            </a>
          </h1>
        </section>

        <section>
          <ul className="flex justify-center">
            <li className="mt-2 mb-2 mr-10 font-normal">
              <a href="http://localhost:3000/#home">Home</a>
            </li>
            <li className="mt-2 mb-2 mr-10 font-normal">
              <a href="http://localhost:3000/#featured">Featured</a>
            </li>
            <li className="mt-2 mb-2 mr-10 font-normal">
              <a href="#">Contact</a>
            </li>
            <li className="mt-2 mb-2 mr-10 font-normal">
              <a href="#">About</a>
            </li>
            <li className="mt-2 mb-2 mr-10 font-normal">
              {" "}
              <a href="/comparisonTable">
                <button>Compare</button>
              </a>
            </li>
          </ul>
        </section>

        <section className="flex right-align mt-2 mb-2 mr-5">
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
        </section>
      </div>
    </div>
  );
};

export default Header;
