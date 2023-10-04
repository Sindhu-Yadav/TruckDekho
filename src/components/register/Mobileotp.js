
import React from "react";
import axios from "axios";
import "./Mobileotp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth_context";

const Mobileotp = () => {
  const navigate = useNavigate();
  
  const [OTP, setOTP] = useState("");
  const { setIsMobileverified } = useAuth();
  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/api/mobile/verifyOTP", {
          inputotp: OTP,
        })
        .then((res) => {
          if (res.status === 200) {
            setIsMobileverified(true);
            navigate("/Mobileregister");
          } else {
            setIsMobileverified(false);
            console.log("Mobile Number Not Verified!!");
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
        Enter the otp recieved on your provided number
      </h1>
      <form className="" action="">
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

export default Mobileotp;
