import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
    <div className="home" id="home">
      <div className="form_container">
        <h4>Select your Budget</h4>
        <select className="form_select" onChange={handleSelect}>
          {options.map((option) => (
            <option className="options" value={option.value}>{option.label}</option>
          ))}
        </select>
        <button className="btn">Search</button>
      </div>
    </div>
  );
}

export default Home;
