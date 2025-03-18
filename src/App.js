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

      {/* Coming Soon Section */}
      <section className="coming-soon">
        <h2>Stay Updated</h2>
        <p>At Parkeze, we aim to make Parking the last thing you need to worry about. Subscribe to stay in touch!</p>
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
        <p>Follow us on <a href="https://www.linkedin.com/company/parkeze/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
