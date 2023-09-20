
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Products_page from "./components/productsPage/Products_page";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products_page" element={<Products_page />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

