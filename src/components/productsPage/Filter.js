import React from "react";

const Filter = ({ filters, onFilterChange }) => {
  const { minPrice, maxPrice, selectedCompany, selectedYear } = filters;

  const handleInputChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  return (
    <div>
      <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => handleInputChange("minPrice", e.target.value)}
      />
      <br />
      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => handleInputChange("maxPrice", e.target.value)}
      />
      <br />
      <label htmlFor="company">Company:</label>
      <select
        id="brand"
        value={selectedCompany}
        onChange={(e) => handleInputChange("selectedBrand", e.target.value)}
      >
        <option value="">Select Company</option>
        <option value="Brand 1">Mahindra</option>
        <option value="Brand 2">Ashok Leyland</option>
        <option value="Brand 3"> Maruti Suzuki</option>
        <option value="Brand 4">Tata</option>
        <option value="Brand 5">Isuzu</option>
      </select>
      <br />
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        value={selectedYear}
        onChange={(e) => handleInputChange("selectedYear", e.target.value)}
      />
    </div>
  );
};

export default Filter;
