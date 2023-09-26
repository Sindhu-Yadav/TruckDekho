
import React, { useState, useEffect } from "react";
import "./ComparisonTable.css";
import jwt_decode from "jwt-decode";
import axios from "axios";

const ComparisonTable = () => {
  const [products, setProducts] = useState([]);
  const authToken = localStorage.getItem("jwt");

  useEffect(() => {
    if (authToken) {
      try {
        const decodedToken = jwt_decode(authToken);
        const userId = decodedToken.id;
        const apiURL = `http://localhost:4000/api/compare/${userId}`;
        axios
          .get(apiURL)
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [authToken]);
  return (
    <div className="comparison-table">
      <h1>Compare Your Products</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Company</th>
            <th>Price</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <img
                  src="https://images.pexels.com/photos/16189121/pexels-photo-16189121/free-photo-of-truck-in-outskirts.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt={product.name}
                  className="product-image"
                />
              </td>
              <td>{product.name}</td>
              <td>{product.company}</td>
              <td>${product.price} Lac</td>
              <td>{product.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

