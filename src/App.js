import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1> . </h1>
        <p> Finding parking so you don't have to</p>
      </header>

      {/* About Us Section
      <section className="about">
        <h2>About Us</h2>
        <p>At ParkeZe, we make sure Parking is the last thing you need to worry about. Stay tuned for updates!</p>
      </section> */}

      {/* Coming Soon Section */}
      <section className="coming-soon">
        <h2>Stay Updated</h2>
        <p>At ParkeZe, we aim to make Parking the last thing you need to worry about. Subscribe to stay in touch!</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Placeholder for APIs */}
      <section className="api-section">
        <h2>Developers</h2>
        <p>APIs are coming soon! Stay tuned for documentation and integration guides.</p>
      </section>
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Parkeze LLC. All rights reserved.</p>
        <p>Contact us: <a href="mailto:contact@parkezesolutions.com">contact@parkezesolutions.com</a></p>
      </footer>
    </div>
  );
}

export default App;
