import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Featured from "./components/featured/Featured";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Featured />
    </div>
  );
}

export default App;