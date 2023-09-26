
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
    <div className="login">
      <div className="loginform_container">
        <h1>Login Here</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn">Login</button>
          <p>
            New to TruckDekho?
            <Link className="loginlink" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

