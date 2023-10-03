import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setuserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="body">
    <div className="register-background">
  <div className="form-container">
    <h1 className="heading-color">Register Here</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="User name"
          name="username"
          onChange={(e) => setuserName(e.target.value)}
          className="text-field"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-field"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-field"
        />
      </div>
      <br/>
      <button
        type="submit"
        className="register-btn"
      >
        Register
      </button>
      <p className="heading-color">
        Already have an account? &nbsp;
        <Link to="/login" className="">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>
</div>
  );
};

export default Register;
