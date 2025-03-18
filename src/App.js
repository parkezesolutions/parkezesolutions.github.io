import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#developers">Developers</a></li>
          <li><a href="#subscribe">Stay Updated</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1> . </h1>
        <p> Finding parking so you don't have to</p>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>At Parkeze, we make sure Parking is the last thing you need to worry about. Stay tuned for updates!</p>
      </section>

      {/* API Section */}
      <section id="developers" className="api-section">
        <h2>Developers</h2>
        <p>APIs are coming soon! Stay tuned for documentation and integration guides.</p>
      </section>

      {/* Stay Updated Section */}
      <section id="subscribe" className="coming-soon">
        <h2>Stay Updated</h2>
        <p>At Parkeze, we aim to make Parking the last thing you need to worry about. Subscribe to stay in touch!</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>&copy; 2025 Parkeze LLC. All rights reserved.</p>
        <p>Contact us: <a href="mailto:contact@parkezesolutions.com">contact@parkezesolutions.com</a></p>
        <p><a href="https://www.linkedin.com/company/parkeze/" target="_blank" rel="noopener noreferrer">Connect with us on LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
