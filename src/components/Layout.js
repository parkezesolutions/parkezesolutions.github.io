import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, showHero = false }) => (
  <div className="App">
    <Navbar />
    <div className="main-content">
      {showHero && (
        <header className="hero">
          <h1>Parkeze</h1>
          <p>Finding parking so you don't have to</p>
        </header>
      )}
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
