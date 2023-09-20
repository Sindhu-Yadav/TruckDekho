import React, { useState } from "react";
import "./Products_page.css";
import Product from "../productcard/Product_card";

const Products_page = () => {
  const [price, setPrice] = useState("");
  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
  ];

  const handleSelect = (event) => {
    setPrice(event.target.label);
  };

  return (
    <div className="products_page">
      <div className="filter_container">
        <h3>Filters</h3>
        <p>Price</p>
        <select className="form_select" onChange={handleSelect}>
          {options.map((option) => (
            <option className="options" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p>Brand</p>
        <select className="form_select" onChange={handleSelect}>
          {options.map((option) => (
            <option className="options" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p>Year</p>
        <select className="form_select" onChange={handleSelect}>
          {options.map((option) => (
            <option className="options" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="product_container">
        <Product
          imageUrl="https://th.bing.com/th/id/OIP.494DcqvWWDE_tld1AJgh-AHaFP?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          company="Mahindra"
          productName="Name of the Product"
          price={1000}
        />
        <Product
          imageUrl="https://th.bing.com/th/id/OIP.494DcqvWWDE_tld1AJgh-AHaFP?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          company="Mahindra"
          productName="Name of the Product"
          price={1000}
        />
        <Product
          imageUrl="https://th.bing.com/th/id/OIP.494DcqvWWDE_tld1AJgh-AHaFP?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          company="Mahindra"
          productName="Name of the Product"
          price={1000}
        />
      </div>
    </div>
  );
};

export default Products_page;
