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
    <div className="flex justify-center items-center min-h-screen bg-white-800">
  <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
    <h1 className="text-2xl font-semibold mb-4">Register Here</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => setuserName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Register
      </button>
      <p className="text-sm text-gray-300">
        Already have an account?
        <Link to="/login" className="text-blue-500 ml-1 hover:underline">
          Login
        </Link>
      </p>
    </form>
  </div>
</div>

  );
};

export default Register;
