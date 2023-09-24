import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ProductsPage from "./components/productsPage/ProductsPage";
import Favorites from "./components/favorites/Favorites";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { AuthProvider} from "./context/auth_context";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/products_page" element={<ProductsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
