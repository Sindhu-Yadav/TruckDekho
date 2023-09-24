import React, { useState, useEffect } from "react";
import "./Products_page.css";
import axios from "axios";
import Product from "../productcard/Product_card";
import Filter from "./Filter";

const Products_page = () => {
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    company: "",
    year: "",
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const applyFilters = () => {
    const { minPrice, maxPrice, company, year } = filters;
    const queryParams = `?minPrice=${minPrice}&maxPrice=${maxPrice}&company=${company}&year=${year}`;
    const url = `http://localhost:4000/api/atlas/products/${queryParams}`;
    axios
      .get(url)
      .then((res) => {
        const filteredProducts = res.data;
        setfilteredProducts(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="product_container">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            imageUrl="https://images.pexels.com/photos/16189121/pexels-photo-16189121/free-photo-of-truck-in-outskirts.jpeg?auto=compress&cs=tinysrgb&w=300"
            productName={product.name}
            company={product.company}
            price={product.price}
            year={product.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Products_page;
