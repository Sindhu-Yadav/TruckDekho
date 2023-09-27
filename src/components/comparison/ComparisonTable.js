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
  }, [authToken, products]);
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 ml-3">Compare Your Products</h1>
      <table className="w-full border border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border p-2">
                <img
                  src="https://images.pexels.com/photos/16189121/pexels-photo-16189121/free-photo-of-truck-in-outskirts.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt={product.name}
                  className="rounded object-cover h-32 w-full"
                />
              </td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.company}</td>
              <td className="border p-2">${product.price} Lac</td>
              <td className="border p-2">{product.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
