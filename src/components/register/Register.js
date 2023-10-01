
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
    <div className="">
  <div className="">
    <h1 className="">Register Here</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="">
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => setuserName(e.target.value)}
          className=""
        />
      </div>
      <div className="">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className=""
        />
      </div>
      <div className="">
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className=""
        />
      </div>
      <button
        type="submit"
        className=""
      >
        Register
      </button>
      <p className="">
        Already have an account?
        <Link to="/login" className="">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>

  );
};

export default Register;

