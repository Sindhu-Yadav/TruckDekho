
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
    Gross_vehicle_weight: "",
    payload: "",
    bodylength: ""
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const applyFilters = () => {
    const { minPrice, maxPrice, company, year, Gross_vehicle_weight, payload, bodylength } = filters;
    const queryParams = `?minPrice=${minPrice}&maxPrice=${maxPrice}&company=${company}&year=${year}&Gross_vehicle_weight=${Gross_vehicle_weight}&payload=${payload}&bodylength=${bodylength}`;
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
    <div className="">
      <div className="">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="">
        {filteredProducts.map((product) => (
          <Product
            key={product._id}
            productId={product._id}
            imageUrl={product.image}
            productName={product.name}
            company={product.company}
            price={product.price}
            Gross_vehicle_weight={product.gross_vehicle_weight}
            payload={product.payload}
            length={product.bodylength}
            year={product.year}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

