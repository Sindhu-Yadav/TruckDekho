
import React from 'react';
import "./Product_card.css";

const Product = (props) => {
  return (
    <div className='product'>
        <img className='product_image' src={props.imageUrl} alt={props.productName} />
        <p className='product_name'>{props.productName}</p>
        <p className='product_company'> {props.company} </p>
        <p>Price: ${props.price}</p>
        <button className='btn'>Checkout Product</button>
    </div>
  )
}

export default Product;
