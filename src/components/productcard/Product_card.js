import React from "react";
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
    <div className="product-card">
      <div className="image_left">
        <div className="product-image">
          <img src={props.imageUrl} alt={props.productName} />
        </div>
        <div className="product-thumbnails">
          <div className="thumbnail">
            <img src={props.imageUrl} alt="Thumbnail 1" />
          </div>
          <div className="thumbnail">
            <img src={props.imageUrl} alt="Thumbnail 2" />
          </div>
          <div className="thumbnail">
            <img src={props.imageUrl} alt="Thumbnail 3" />
          </div>
        </div>
      </div>
      <div className="product-details">
        <p className="product-name">{props.productName}</p>
        <p className="product-company">{props.company}</p>
        <p className="product-price">Price: ${props.price} Lac</p>
        <p className="product-year">Year: {props.year}</p>
        <div className="product-buttons">
          <button className="checkout-button">Checkout Product</button>
          <button className="compare-button" onClick={handleCompare}>
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
