import React, {useEffect} from "react";
import Product from "../productcard/Product_card";
import "./Favorites.css";
import { useAuth } from "../../context/auth_context";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  // const { isAuthenticated } = useAuth();
  // const Navigate = useNavigate();
  // if (isAuthenticated) {
  //   return (
  //     <div className="favorites">
  //       <h1>Your Favorite Items</h1>
  //       <Product
  //         imageUrl="https://th.bing.com/th/id/OIP.494DcqvWWDE_tld1AJgh-AHaFP?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  //         company="Mahindra"
  //         productName="Name of the Product"
  //         price={1000}
  //       />
  //     </div>
  //   )
  // } else {
  //   return Navigate("/login");
  // }
  return (
    <div className="favorites">
      <h1>Your Favorite Items</h1>
      <Product
        imageUrl="https://th.bing.com/th/id/OIP.494DcqvWWDE_tld1AJgh-AHaFP?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        company="Mahindra"
        productName="Name of the Product"
        price={1000}
      />
    </div>
  );
};

export default Favorites;
