import React from "react";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>At Parkeze, we make sure parking is the last thing you need to worry about. Stay tuned for updates!</p>
      </section>

      {/* API Section */}
      <section id="developers" className="api-section">
        <h2>Developers</h2>
        <p>APIs are coming soon! Stay tuned for documentation and integration guides.</p>
      </section>

      {/* Stay Updated Section */}
      <section id="subscribe" className="coming-soon">
        <h2>Stay Updated</h2>
        <p>At Parkeze, we aim to make parking the last thing you need to worry about. Subscribe to stay in touch!</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </Layout>
  );
}

export default App;
