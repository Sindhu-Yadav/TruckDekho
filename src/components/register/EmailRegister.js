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
    <div>
      Email Register
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <label htmlFor="Confirm Password">Confirm Password</label>
        <input
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {passwordMatch ? null : (
          <div>
            <p>Passwords do not match.</p>
          </div>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Emailregister;
