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
    <div className="ml-4 mr-4 bg-gray-800 rounded-lg shadow-md p-4 flex mb-2">
      <div className="w-32 h-32 object-cover rounded-lg mr-4">
        <img
          className="w-full h-full rounded-lg"
          src={props.imageUrl}
          alt={props.productName}
        />
      </div>
      <div className="flex flex-col text-white w-full">
        <p className="product_name text-2xl font-semibold">
          {props.productName}
        </p>
        <p className="product_company text-gray-400">{props.company}</p>
        <p className="text-green-400 font-semibold mt-2">
          Price: ${props.price} Lac
        </p>
        <p className="text-blue-400 font-semibold">Year: {props.year}</p>
        <div className="flex mt-4">
          <button className="bg-indigo-600 text-white hover:bg-indigo-700 mr-4">
            Checkout Product
          </button>
          <button
            className="bg-orange-500 text-white hover:bg-orange-600"
            onClick={handleCompare}
          >
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
