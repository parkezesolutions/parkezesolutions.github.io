import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="App">
    <Navbar />
    <header className="hero" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 'bold' }}>Parkeze</h1>
      <p style={{ fontSize: '1.5rem' }}>Finding parking so you don't have to</p>
    </header>
    {children}
    <Footer />
  </div>
);

export default Layout;
