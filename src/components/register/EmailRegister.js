import React, { useState } from "react";
import "./EmailRegister.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth_context";

const Emailregister = () => {
  const navigate = useNavigate();
  const { email, setEmail } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: email,
    password: "",
    mobile: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setPasswordMatch(true);
      axios
        .post("http://localhost:4000/api/auth/register", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="bg-img">
    <div className="form-container">
      <h3 className="heading-color">Email Register</h3>
      <form onSubmit={handleSubmit}>
        <label  className="label-field" htmlFor="username">Username</label>
        <input
          type="text"
          className="text-field"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
        /><br/>
        <label className="label-field" htmlFor="password">Password</label>
        <input
          className="text-field"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        /><br/>
        <label className="label-field" htmlFor="Confirm Password">Confirm Password</label>
        <input
          className="text-field"
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        /><br/>
        {passwordMatch ? null : (
          <div>
            <p>Passwords do not match.</p>
          </div>
        )}
        <button className="register-btn" type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Emailregister;
