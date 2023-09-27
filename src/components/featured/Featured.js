import React from "react";
import "./Featured.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../productcard/Product_card.js";

const Featured = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <div className="featured" id="featured">
      <h1>Featured Truck</h1>
      <Carousel paritialVisibile="right" responsive={responsive}>
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
      </Carousel>
    </div>
  );
};

export default Featured;
