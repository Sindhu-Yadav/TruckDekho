import React, { useState, useEffect } from "react";
import "./Home.css";
import Featured from "../featured/Featured";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth_context";

function Home() {
  const [label, setLabel] = useState("");
  
  const handleSelect = (event) => {
    setLabel(event.target.label);
  };
  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
  ];

  return (
    <div>
      <div className="home" id="home">
      <div className="form_container">
        <h4>Select your Budget</h4>
        <select className="home_select" onChange={handleSelect}>
          {options.map((option) => (
            <option className="options" value={option.value}>{option.label}</option>
          ))}
        </select>
        <Link to="/products_page" >
        <button className="search_btn">Search</button>
        </Link>
      </div>
    </div>
    <Featured />
    </div>
  );
}

export default Home;
