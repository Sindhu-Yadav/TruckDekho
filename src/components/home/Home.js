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
      <div className="bg_img bg-cover bg-center h-screen">
        <h1 className="text-gray-200 text-4xl font-bold flex justify-center pt-20 mb-6">
          Your One Stop Destination for truck Search
        </h1>
        <section className="flex justify-center">
          <input
            className="bg-black bg-opacity-60 text-white w-80 px-4 mt-4 py-2 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search Trucks"
          />
          <button
            className="ml-4 text-white mt-4 px-4 py-2 rounded-lg transition-transform hover:scale-150"
            onClick={handleSearchClick}
          >
            <FontAwesomeIcon className="" icon={faSearch} />
          </button>
        </section>
      </div>
      {/* <Featured /> */}
    </div>
  );
}

export default Home;
