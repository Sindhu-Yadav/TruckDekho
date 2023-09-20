
import React from 'react';
import "./Product_card.css";

const Product = (props) => {
  return (
    <div className='product'>
        <img className='product_image' src={props.imageUrl} alt={props.productName} />
        <p className='product_company'> {props.company} </p>
        <p className='product_name'>{props.productName}</p>
        <p>Price: ${props.price}</p>
        <button className='btn'>Checkout Product</button>
    </div>
  )
}

export default Product;

// https://th.bing.com/th/id/OIP.494DcqvWWDE_tld1AJgh-AHaFP?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7