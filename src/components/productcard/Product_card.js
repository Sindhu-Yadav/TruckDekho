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
            <img
              src="https://th.bing.com/th/id/OIP.5ngnXs6GANmyaKoht4aM4AHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail 1"
            />
          </div>
          <div className="thumbnail">
            <img
              src="https://th.bing.com/th?q=6X6+Truck&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defdefault"
              alt="Thumbnail 2"
            />
          </div>
          <div className="thumbnail">
            <img src={props.imageUrl} alt="Thumbnail 3" />
          </div>
        </div>
      </div>
      <div className="">
        <p className="brand-name">{props.productName}</p>
        <p className="brand-name">{props.company}</p>
        <p className="">Price: ${props.price} Lac</p>
        <p className="">Fuel Tank: 190L</p>
        <p className="">Power: 140hp</p>
        <p className="">Payload: 1500kg</p>
        <p className="">GVW: 5000kg</p>
        <div className="product-buttons">
          <button className="checkout-button">Know More</button>
          <button className="compare-button" onClick={handleCompare}>
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
