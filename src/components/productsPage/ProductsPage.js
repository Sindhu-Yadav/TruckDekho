
import React, { useState, useEffect } from "react";
import "./ProductsPage.css";
import axios from "axios";
import Product from "../productcard/Product_card";
import Filter from "./Filter";

const ProductsPage = () => {
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
  });

  return (
    <div className="flex m-4 justify-around min-h-screen">
      <div className="flex-grow-1">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="flex-grow-2 w-9/12 mt-2">
        {filteredProducts.map((product) => (
          <Product
            key={product._id}
            productId={product._id}
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

export default ProductsPage;
