
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ProductsPage from "./components/productsPage/ProductsPage";
import Favorites from "./components/favorites/Favorites";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ComparisonTable from "./components/comparison/ComparisonTable";
import { AuthProvider } from "./context/auth_context";

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-800">
        <Header />
        <Routes>
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comparisonTable" element={<ComparisonTable />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

