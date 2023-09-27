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
    <div className="flex flex-col text-white">
  <label htmlFor="minPrice" className="text-gray-300 font-bold">Min Price (in Lac):</label>
  <input
    className="bg-gray-700 text-white rounded-lg p-2 border border-gray-500 focus:outline-none focus:border-blue-500"
    type="number"
    id="minPrice"
    value={minPrice}
    onChange={(e) => handleInputChange("minPrice", e.target.value)}
  />
  <br />
  <label htmlFor="maxPrice" className="text-gray-300 font-bold">Max Price (in Lac):</label>
  <input
    className="bg-gray-700 text-white rounded-lg p-2 border border-gray-500 focus:outline-none focus:border-blue-500"
    type="number"
    id="maxPrice"
    value={maxPrice}
    onChange={(e) => handleInputChange("maxPrice", e.target.value)}
  />
  <br />
  <label htmlFor="company" className="text-gray-300 font-bold">Company:</label>
  <select
    className="bg-gray-700 text-white rounded-lg p-2 border border-gray-500 focus:outline-none focus:border-blue-500"
    id="company"
    value={company}
    type="string"
    onChange={(e) => handleInputChange("company", e.target.value)}
  >
    <option value="">Select Company</option>
    <option value="Mahindra">Mahindra</option>
    <option value="Ashok Leyland">Ashok Leyland</option>
    <option value="Maruti Suzuki">Maruti Suzuki</option>
    <option value="Tata">Tata</option>
    <option value="Isuzu">Isuzu</option>
  </select>
  <br />
  <label htmlFor="year" className="text-gray-300 font-bold">Year:</label>
  <input
    className="bg-gray-700 text-white rounded-lg p-2 border border-gray-500 focus:outline-none focus:border-blue-500"
    type="number"
    id="year"
    value={year}
    onChange={(e) => handleInputChange("year", e.target.value)}
  />
</div>

  );
};

export default Filter;
