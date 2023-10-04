
import React from "react";
import axios from "axios";
import "./Emailotp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth_context";

const Emailotp = () => {
  const navigate = useNavigate();
  
  const [OTP, setOTP] = useState("");
  const { setIsEmailverified } = useAuth();
  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/api/email/verifyOTP", {
          inputotp: OTP,
        })
        .then((res) => {
          if (res.status === 200) {
            setIsEmailverified(true);
            navigate("/Emailregister");
          } else {
            setIsEmailverified(false);
            console.log("Email Not Verified!!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="form-container">
      <h1 className="heading-color1">
        Enter the otp recieved on your provided email
      </h1>
      <form action="">
        <input
        className="text-field"
          type="number"
          value={OTP}
          onChange={(e) => {
            setOTP(e.target.value);
          }}
        />
        <br/>
        <button className="register-btn" onClick={handleOTP}>Verify OTP</button>
      </form>
    </div>
  );
};

export default Emailotp;
