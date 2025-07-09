import React from "react";
import Layout from "../components/Layout";

const Solutions = () => (
  <Layout>
    <section className="solutions-section">
      <h2>Our Complete Parking Ecosystem</h2>
      <p>Parkeze offers a comprehensive suite of interconnected products designed to revolutionize every aspect of parking management. From hardware sensors to mobile applications, our integrated solutions work seamlessly together to create the most advanced parking intelligence platform available today.</p>
      
      <div className="features-grid" style={{ margin: '40px 0' }}>
        <div className="feature-card">
          <div className="feature-icon">🏗️</div>
          <div className="feature-title">Infrastructure Solutions</div>
          <div className="feature-description">
            Hardware and gateway solutions for comprehensive parking network deployment
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <div className="feature-title">Software Applications</div>
          <div className="feature-description">
            User and operator applications for managing and accessing parking data
          </div>
        </div>
      </div>

      <ul className="custom-list">
        <li>
          <strong>The Gateway</strong><br />
          Our enterprise-grade IoT gateway serves as the central nervous system for parking sensor networks. This robust device coordinates communication between multiple sensors, processes data locally for reduced latency, and ensures reliable transmission to our cloud platform.
          <br /><br />
          <strong>Key Features:</strong>
          <ul className="nested-list">
            <li>Supports up to 500 sensors per gateway</li>
            <li>Edge computing capabilities for real-time processing</li>
            <li>Multiple connectivity options (4G/5G, WiFi, Ethernet)</li>
            <li>Weather-resistant IP67 housing</li>
            <li>Built-in backup power with solar charging option</li>
            <li>Advanced security with end-to-end encryption</li>
            <li>Remote monitoring and over-the-air updates</li>
          </ul>
        </li>
        
        <li>
          <strong>The Sensor</strong><br />
          Our next-generation parking sensors represent the pinnacle of detection technology. Using advanced magnetic field detection, these sensors provide unparalleled accuracy in vehicle presence detection across all weather conditions and vehicle types.
          <br /><br />
          <strong>Technical Specifications:</strong>
          <ul className="nested-list">
            <li>99.5% accuracy rate in all weather conditions</li>
            <li>10+ year battery life with low-power design</li>
            <li>Installation time under 15 minutes per sensor</li>
            <li>Detection range: 0.3m to 3.5m height</li>
            <li>Operating temperature: -40°C to +85°C</li>
            <li>Wireless communication up to 2km range</li>
            <li>Self-diagnostic capabilities with health monitoring</li>
          </ul>
        </li>
        
        <li>
          <strong>ParkezeMobile</strong><br />
          Our award-winning mobile application transforms the driver experience with intelligent parking discovery, seamless navigation, and integrated payment solutions. Designed for both iOS and Android, the app learns user preferences and provides personalized parking recommendations.
          <br /><br />
          <strong>App Features:</strong>
          <ul className="nested-list">
            <li>Real-time parking availability with live updates</li>
            <li>AI-powered parking predictions and recommendations</li>
            <li>Turn-by-turn navigation to available spaces</li>
            <li>Contactless payment and reservation system</li>
            <li>Parking history and expense tracking</li>
            <li>Social features for sharing parking tips</li>
            <li>Accessibility features for disabled parking</li>
            <li>Multi-language support and offline maps</li>
          </ul>
        </li>
        
        <li>
          <strong>ParkezeOperator</strong><br />
          Our comprehensive analytics and management dashboard empowers parking operators, city planners, and facility managers with deep insights into parking utilization, revenue optimization, and operational efficiency. The platform scales from single lots to city-wide implementations.
          <br /><br />
          <strong>Dashboard Capabilities:</strong>
          <ul className="nested-list">
            <li>Real-time occupancy monitoring and alerts</li>
            <li>Historical analysis and trend forecasting</li>
            <li>Dynamic pricing optimization algorithms</li>
            <li>Revenue reporting and financial analytics</li>
            <li>Maintenance scheduling and sensor health monitoring</li>
            <li>Custom reporting and data export tools</li>
            <li>API access for third-party integrations</li>
            <li>Multi-tenant support for enterprise deployments</li>
          </ul>
        </li>
      </ul>

      <div style={{ marginTop: '60px', padding: '40px', background: 'linear-gradient(135deg, #004d40, #00796b)', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
        <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>Ready to Deploy?</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#e0f2f1' }}>
          Our solutions are designed for rapid deployment with minimal infrastructure changes. Most installations are completed within days, not months.
        </p>
        <div className="features-grid" style={{ color: '#004d40' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡</div>
            <div style={{ fontWeight: '600', marginBottom: '10px' }}>Quick Installation</div>
            <div style={{ fontSize: '0.9rem' }}>Average deployment time of 2-5 days</div>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔧</div>
            <div style={{ fontWeight: '600', marginBottom: '10px' }}>Minimal Disruption</div>
            <div style={{ fontSize: '0.9rem' }}>No major infrastructure changes required</div>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📞</div>
            <div style={{ fontWeight: '600', marginBottom: '10px' }}>24/7 Support</div>
            <div style={{ fontSize: '0.9rem' }}>Dedicated technical support team</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Solutions;