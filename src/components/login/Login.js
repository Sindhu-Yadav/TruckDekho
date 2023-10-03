import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/auth_context";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          const { token } = res.data;
          console.table(res);
          localStorage.setItem("jwt", token);
          login(token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-background">
      <div className="form-container">
        <h1 className="heading-color">Login Here</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 ">
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
            Login
          </button>
          <p className="heading-color">
            New to TruckDekho?
            <Link to="/register" className="">
              &nbsp;Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
