import React from "react";
import "./Filter.css";
import { useEffect } from "react";

const Filter = ({ filters, onFilterChange }) => {
  const {
    minPrice,
    maxPrice,
    company,
    year,
    Gross_vehicle_weight,
    payload,
    bodylength,
  } = filters;

  const handleInputChange = (field, value) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };
  
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <div className="Filterclass">
      <label htmlFor="minPrice" className="">
        Min Price (in Lac):
      </label>
      <input
        className=""
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => handleInputChange("minPrice", e.target.value)}
      />
      <br />
      <label htmlFor="maxPrice" className="">
        Max Price (in Lac):
      </label>
      <input
        className=""
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => handleInputChange("maxPrice", e.target.value)}
      />
      <br />
      <label htmlFor="company" className="">
        Company:
      </label>
      <select
        className=""
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
        <option value="Eicher">Eicher</option>
      </select>
      <br />
      <label htmlFor="year" className="">
        Year:
      </label>
      <input
        className=""
        type="number"
        id="year"
        value={year}
        onChange={(e) => handleInputChange("year", e.target.value)}
      />
      <label htmlFor="Gross_vehicle_weight" className="">
        Gross vehicle weight:
      </label>
      <input
        className=""
        type="number"
        id="Gross_vehicle_weight"
        value={Gross_vehicle_weight}
        onChange={(e) =>
          handleInputChange("Gross_vehicle_weight", e.target.value)
        }
      />
      <label htmlFor="payload" className="">
        Payload:
      </label>
      <input
        className=""
        type="number"
        id="payload"
        value={payload}
        onChange={(e) => {
          handleInputChange("payload", e.target.value);
        }}
      />
      <label htmlFor="bodylength" className="">
        BodyLength:
      </label>
      <input
        className=""
        type="number"
        id="bodylength"
        value={bodylength}
        onChange={(e) => handleInputChange("bodylength", e.target.value)}
      />
    </div>
  );
};

export default Filter;
