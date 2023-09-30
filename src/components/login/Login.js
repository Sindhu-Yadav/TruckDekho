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
    <div className="flex justify-center items-center min-h-screen bg-gray-800 login-background">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white mt-4 container-box">
        <h1 className="text-2xl font-semibold mb-4">Login Here</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 ">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500 input-box"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500 input-box"
            />
          </div>
          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>
          <p className="text-sm text-gray-300">
            New to TruckDekho?
            <Link to="/register" className="text-red-500 ml-1 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
