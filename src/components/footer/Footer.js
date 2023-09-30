import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inner-footer ">
        <h1 className="footer-title">ABOUT JOSH RIDERS</h1>
        <ul>
          <li>About Us</li>
          <li>Careers With Us</li>
          <li>Terms And Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQ's</li>
        </ul>
      </div>
      <div className="inner-footer ">
        <h1 className="footer-title">CONTACT WITH US</h1>
        <ul>
          <li>
            <a>Facebook</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Youtube</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="inner-footer ">
        <h1 className="footer-title">OTHER</h1>
        <ul>
          <li>Email : joshriders.com</li>
          <li>Phone : 1234567890</li>
          <li>Address : 14th main road , MP, 563848</li>
        </ul>
      </div>
      <div className="inner-footer ">
        <h1 className="footer-title">FEEDBACK</h1>
        
        <input className="w-full px-1 py1 mt-2 border rounded-sm  text-white focus:outline-none focus:border-blue-500" type="text" placeholder="Give us feedback" />
      </div>
    </div>
  );
};

export default Footer;
