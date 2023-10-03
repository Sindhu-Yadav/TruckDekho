import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProductsPage from "./components/productsPage/ProductsPage";
import Favorites from "./components/favorites/Favorites";
import Login from "./components/login/Login";
import ComparisonTable from "./components/comparison/ComparisonTable";
import Registerchoice from "./components/register/Registerchoice";
import { AuthProvider } from "./context/auth_context";
import Mobileregister from "./components/register/Mobileregister";
import Mobileotp from "./components/register/Mobileotp";
import Emailotp from "./components/register/Emailotp";
import EmailRegister from "./components/register/EmailRegister";

function App() {
  return (
    <AuthProvider>
      <div className="">
        <Header />
        <Routes>
          <Route path="/productspage" element={<ProductsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/Emailregister" element={<EmailRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comparisonTable" element={<ComparisonTable />} />
          <Route path="/registerchoice" element={<Registerchoice />} />
          <Route path="/mobileregister" element={<Mobileregister />} />
          <Route path="/mobileotp" element={<Mobileotp />} />
          <Route path="/emailotp" element={<Emailotp />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
