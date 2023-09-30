import React from "react";
import "./Featured.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../productcard/Product_card.js";

const Featured = () => {
  

  return (
    <div className="featured">
      <div className="box-model">
        <h2 className="box-title">The Most Popular Cars</h2>
       
        <div className="inner-box-model">
          <div className="box-inner">pic1</div>
          <div className="caption-box">
            Car Name
          </div>
        </div>
        <div className="inner-box-model">
          <div className="box-inner">pic2</div>
          <div className="caption-box">
            Car Name
          </div>
        </div>
        <div className="inner-box-model">
          <div className="box-inner">pic3</div>
          <div className="caption-box">
            Car Name
          </div>
        </div>
        <div className="inner-box-model">
          <div className="box-inner"> <img src="" alt="" /> </div>
          <div className="caption-box">
            Car Name
          </div>
        </div>
       
      </div>
      <div className="box-model">
        <h2 className="box-title">About Cars</h2>
        <div className="inner-content-modal">
        <div className="inner-content">
          <div >pic of car <div class="text-info" >information</div>
          <div/>
         </div>
        </div>
        </div>
        <div className="inner-content-modal">
        <div className="inner-content">
          <div >pic of car <div class="text-info" >information</div>
          <div/>
         </div>
        </div>
        </div>

        </div>
    </div>
  );
};

export default Featured;
