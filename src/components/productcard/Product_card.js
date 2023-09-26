import React, { useState } from "react";
import "./Product_card.css";
import jwt_decode from "jwt-decode";
import axios from "axios";

const Product = (props) => {
  const handleCompare = () => {
    const truckId = props.productId;
    const authToken = localStorage.getItem("jwt");
    if (authToken) {
      try {
        const decodedToken = jwt_decode(authToken);
        const userId = decodedToken.id;
        console.log("User ID:", userId);
        const apiURL = `http://localhost:4000/api/compare/${userId}/${truckId}`;
        axios
          .post(apiURL)
          .then((response) => {
            if (response.status === 200) {
              console.log("Request Success", response.data);
              const { message, comparisonList } = response.data;
              console.log("Message:", message);
              console.log("Comparison List:", comparisonList);
              alert(message);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("Authentication token not found in local storage");
    }
  };
  return (
    <div className="product">
      <img
        className="product_image"
        src={props.imageUrl}
        alt={props.productName}
      />
      <p className="product_name">{props.productName}</p>
      <p className="product_company"> {props.company} </p>
      <p>Price: ${props.price} Lac</p>
      <p>Year: {props.year}</p>
      <button className="btn">Checkout Product</button>
      <button className="btn" onClick={handleCompare}>
        Compare
      </button>
    </div>
  );
};

export default Product;
