import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Featured from "../featured/Featured";

function Home() {
  const Navigate = useNavigate();

  const handleSearchClick = () => {
    Navigate("/productspage");
  };

  return (
    <div>
      <div>
        <img
          className="bg_img"
          src="https://wallpapers.com/images/featured/cool-trucks-cdvn4ttk7o8geggz.webp"
        />
        <input
          className="input_box"
          placeholder="Search..."
          type="text"
          id="myInput"
        ></input>
        <button className="searchbtn" onClick={handleSearchClick}>
          <FontAwesomeIcon className="favorites" icon={faSearch} />
        </button>
      </div>
      <Featured />
    </div>
  );
}

export default Home;
