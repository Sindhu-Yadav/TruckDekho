import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inner-footer ">
        <h1 className="footer-title">ABOUT JOSH RIDERS</h1>
        <ul className="bottom-footer">
          <li>About Us</li>
          <li>Careers With Us</li>
          <li>Terms And Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQ's</li>
        </ul>
      </div>
      <div className="inner-footer ">
        <h1 className="footer-title">CONTACT WITH US</h1>
        <ul className="bottom-footer">
          <li>
            Facebook
          </li>
          <li>
            Instagram
          </li>
          <li>
            Youtube
          </li>
          <li>
            Contact Us
          </li>
        </ul>
      </div>
      <div className="inner-footer ">
        <h1 className="footer-title">OTHER</h1>
        <ul className="bottom-footer">
          <li>Email : joshriders.com</li>
          <li>Phone : 1234567890</li>
          <li>Address : 14th main road , MP, 563848</li>
        </ul>
      </div>
      <div className="inner-footer ">
        <h1 className="footer-title">FEEDBACK</h1>
        
        <input className="text-box" type="text" placeholder="Give us feedback" />
      </div>
    </div>
  );
};

export default Footer;
