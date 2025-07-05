import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Layout>
    <section className="not-found-section" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2 style={{ fontSize: '3rem', color: '#8f2121' }}>404 - Page Not Found</h2>
      <p style={{ fontSize: '1.2rem' }}>The page you're looking for doesn't exist or has been moved.</p>
      <p><Link to="/" style={{ color: '#00796b', fontWeight: 'bold' }}>← Back to Home</Link></p>
    </section>
  </Layout>
);

export default NotFound;
