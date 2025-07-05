import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Forbidden = () => (
  <Layout>
    <section className="forbidden-section" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2 style={{ fontSize: '3rem', color: '#d84315' }}>403 - Forbidden</h2>
      <p style={{ fontSize: '1.2rem' }}>You do not have permission to access this page.</p>
      <p><Link to="/" style={{ color: '#00796b', fontWeight: 'bold' }}>← Back to Home</Link></p>
    </section>
  </Layout>
);

export default Forbidden;
