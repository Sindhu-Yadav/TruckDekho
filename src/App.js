import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Products_page from "./components/productsPage/Products_page";
import Favorites from "./components/favorites/Favorites";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { AuthProvider, useAuth } from "./context/auth_context";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/products_page" element={<Products_page />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={() => (isLoggedIn ? <Favorites /> : <Login />)}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
