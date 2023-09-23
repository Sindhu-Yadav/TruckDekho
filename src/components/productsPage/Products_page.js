import React, { useState, useEffect } from "react";
import "./Products_page.css";
import axios from "axios";
import Product from "../productcard/Product_card";
import Filter from "./Filter";

const Products_page = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    selectedBrand: "",
    selectedYear: "",
  });

  useEffect(() => {}, []);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const applyFilters = () => {
    e.preventDefault();
    
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="products_page">
      <div className="filter_container">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <button onClick={applyFilters}>Search</button>
      </div>
      {/* <div className="product_container">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div> */}
    </div>
  );
};

export default Products_page;
