import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Footer,
} from "./components";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
                
 
            </Routes>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
