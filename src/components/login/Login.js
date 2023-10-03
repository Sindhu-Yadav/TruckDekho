import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/auth_context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState();

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/login", {
        email: email,
        mobile: mobile,
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
    <div className="">
      <div className="">
        <h1 className="">Login Here</h1>
        <form onSubmit={handleSubmit} className="">
          <h4>Use Registered Email to login</h4>
          <div className="">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className=""
            />
          </div>
          <h4>Use Registered Mobile to login</h4>
          <div className="">
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobile"
              onChange={(e) => setMobile(e.target.value)}
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
          <button type="submit" className="">
            Login
          </button>
          <p className="">
            New to TruckDekho?
            <Link to="/register" className="">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
