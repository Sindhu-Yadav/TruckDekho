import React from "react";
import { useEffect } from "react";

const Filter = ({ filters, onFilterChange }) => {
  const { minPrice, maxPrice, company, year } = filters;

  const handleInputChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  useEffect(()=>{
    console.log(filters);
  },[filters]);

  return (
    <div>
      <label htmlFor="minPrice">Min Price(in Lac):</label>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => handleInputChange("minPrice", e.target.value)}
      />
      <br />
      <label htmlFor="maxPrice">Max Price(in Lac):</label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => handleInputChange("maxPrice", e.target.value)}
      />
      <br />
      <label htmlFor="company">Company:</label>
      <select
        id="company"
        value={company}
        type="string"
        onChange={(e) => handleInputChange("company", e.target.value)}
      >
        <option value="">Select Company</option>
        <option value="Mahindra">Mahindra</option>
        <option value="Ashok Leyland">Ashok Leyland</option>
        <option value="Maruti Suzuki"> Maruti Suzuki</option>
        <option value="Tata">Tata</option>
        <option value="Isuzu">Isuzu</option>
      </select>
      <br />
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={(e) => handleInputChange("year", e.target.value)}
      />
    </div>
  );
};

export default Filter;
