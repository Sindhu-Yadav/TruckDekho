
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Registerchoice.css";
import { useAuth } from "../../context/auth_context";

const Registerchoice = () => {
  const navigate = useNavigate();
  const [registrationMethod, setregistrationMethod] = useState("mobile");
  const { email, setEmail } = useAuth();
  const { mobileNumber, setMobileNumber } = useAuth();

  const handleMethodChange = (e) => {
    setregistrationMethod(e);
  };
  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      if (registrationMethod === "mobile") {
        axios
          .post("http://localhost:4000/api/mobile/sendOTP", {
            mobile: mobileNumber,
          })
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              navigate("/Mobileotp");
            } else {
              console.log(res.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (registrationMethod === "email") {
        axios
          .post("http://localhost:4000/api/email/sendOTP", {
            email: mobileNumber,
          })
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              navigate("/Emailotp");
            } else {
              console.log(res.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="head">
      <form action="">
        <h1>Choose your Registration Method</h1>
        <div>
          <input
            type="radio"
            id="mobileMethod"
            name="registrationMethod"
            value="mobileNumber"
            onChange={() => handleMethodChange("mobile")}
          />
          <label htmlFor="mobileMethod">
            Use Mobile number for registration
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="emailMethod"
            name="registrationMethod"
            value="email"
            onChange={() => handleMethodChange("email")}
          />
          <label htmlFor="emailMethod">Use email for registration</label>
        </div>
        {registrationMethod === "mobile" && (
          <>
            <label htmlFor="mobile_number">Mobile number</label>
            <input
              type="number"
              placeholder="Enter your mobile number..."
              name="mobilenumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </>
        )}
        {registrationMethod === "email" && (
          <>
            <label htmlFor="email">Email Adddress</label>
            <input
              type="email"
              placeholder="Enter your Email address..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        )}
        <button onClick={handleSendOTP}>Send OTP</button>
      </form>
    </div>
  );
};

export default Registerchoice;

