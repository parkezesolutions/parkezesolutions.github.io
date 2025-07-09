import React from "react";
import Layout from "../components/Layout";

const Integration = () => (
  <Layout>
    <section className="integration-section">
      <h2>Developer-First Integration Platform</h2>
      <p>Parkeze's integration platform is built for developers, by developers. Our flexible APIs and multiple protocol support ensure seamless integration with existing systems, from simple mobile apps to complex enterprise infrastructure. Whether you're building a consumer application or managing city-wide parking networks, our platform scales to meet your needs.</p>
      
      <div className="features-grid" style={{ margin: '40px 0' }}>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <div className="feature-title">Real-Time Data</div>
          <div className="feature-description">
            Sub-second latency for live parking updates with guaranteed data freshness
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <div className="feature-title">Enterprise Security</div>
          <div className="feature-description">
            OAuth 2.0, API keys, and role-based access control for secure integrations
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <div className="feature-title">Auto-Scaling</div>
          <div className="feature-description">
            Handle millions of requests with automatic scaling and load balancing
          </div>
        </div>
      </div>

      <ul className="custom-list">
        <li>
          <strong>MQTT Protocol Integration</strong><br />
          Our MQTT implementation provides the fastest path to real-time parking data. Built on industry-standard MQTT 5.0, our broker supports millions of concurrent connections with guaranteed message delivery and intelligent routing for optimal performance.
          <br /><br />
          <strong>MQTT Features:</strong>
          <ul className="nested-list">
            <li>MQTT 5.0 compliant with enhanced features</li>
            <li>TLS 1.3 encryption with certificate-based authentication</li>
            <li>Quality of Service levels 0, 1, and 2 support</li>
            <li>Retained messages for latest state information</li>
            <li>Will messages for connection monitoring</li>
            <li>Topic filtering with wildcards and shared subscriptions</li>
            <li>Custom properties for metadata transmission</li>
            <li>Session persistence and message queuing</li>
          </ul>
          <br />
          <p><em>Contact us for detailed topic structure and implementation examples.</em></p>
        </li>
        
        <li>
          <strong>REST API Integration</strong><br />
          Our comprehensive RESTful API provides full access to parking data, analytics, and system management. Built with OpenAPI 3.0 specifications, our API includes interactive documentation, code generation, and extensive testing tools for rapid development.
          <br /><br />
          <strong>API Capabilities:</strong>
          <ul className="nested-list">
            <li>RESTful design with intuitive endpoint structure</li>
            <li>JSON and XML response formats</li>
            <li>Comprehensive filtering, sorting, and pagination</li>
            <li>Bulk operations for efficient data handling</li>
            <li>Webhook support for event-driven architectures</li>
            <li>Rate limiting with burst allowances</li>
            <li>Detailed error responses with troubleshooting guides</li>
            <li>SDK generation for 10+ programming languages</li>
          </ul>
          <br />
          <p><em>Contact us for API documentation and endpoint specifications.</em></p>
        </li>
      </ul>

      <div style={{ marginTop: '40px', padding: '30px', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #00796b' }}>
        <h3 style={{ color: '#004d40', marginBottom: '20px', fontSize: '1.5rem' }}>Integration Support & Resources</h3>
        
        <div className="features-grid" style={{ marginBottom: '20px' }}>
          <div>
            <h4 style={{ color: '#004d40', marginBottom: '10px' }}>📚 Documentation</h4>
            <ul className="nested-list">
              <li>Interactive API explorer with live testing</li>
              <li>Step-by-step integration guides</li>
              <li>Code samples in 10+ languages</li>
              <li>Postman collections and testing suites</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#004d40', marginBottom: '10px' }}>🛠️ Developer Tools</h4>
            <ul className="nested-list">
              <li>SDK libraries for popular frameworks</li>
              <li>Sandbox environment for testing</li>
              <li>API monitoring and analytics dashboard</li>
              <li>Debugging tools and error tracking</li>
            </ul>
          </div>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h4 style={{ color: '#004d40', marginBottom: '15px' }}>🚀 Quick Start Integration</h4>
          <p style={{ marginBottom: '15px', fontSize: '0.95rem' }}>Get up and running in under 30 minutes with our quick start guides:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🌐</div>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Web Applications</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>JavaScript, React, Vue.js</div>
            </div>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📱</div>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Mobile Apps</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>iOS, Android, React Native</div>
            </div>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🖥️</div>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Backend Services</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Node.js, Python, Java</div>
            </div>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '6px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>☁️</div>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Cloud Platforms</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>AWS, Azure, Google Cloud</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '30px', background: 'linear-gradient(135deg, #004d40, #00796b)', borderRadius: '8px', color: 'white' }}>
        <h3 style={{ color: 'white', marginBottom: '15px' }}>Ready to Integrate?</h3>
        <p style={{ marginBottom: '20px', color: '#e0f2f1' }}>
          Join thousands of developers already building with Parkeze. Our comprehensive platform supports everything from simple integrations to complex enterprise deployments.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '25px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚡</div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>99.9% Uptime SLA</div>
            <div style={{ fontSize: '0.9rem', color: '#b2dfdb' }}>Enterprise-grade reliability</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔧</div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>24/7 Developer Support</div>
            <div style={{ fontSize: '0.9rem', color: '#b2dfdb' }}>Expert technical assistance</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📊</div>
            <div style={{ fontWeight: '600', marginBottom: '5px' }}>Real-time Monitoring</div>
            <div style={{ fontSize: '0.9rem', color: '#b2dfdb' }}>API performance insights</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: '#fff3e0', borderRadius: '8px', borderLeft: '4px solid #ff9800' }}>
        <h3 style={{ color: '#e65100', marginBottom: '15px' }}>🚧 Coming Soon: Enhanced Features</h3>
        <p style={{ marginBottom: '15px', color: '#bf360c' }}>
          We're continuously expanding our integration capabilities. Here's what's on the roadmap:
        </p>
        <ul className="nested-list">
          <li>GraphQL API for flexible data queries</li>
          <li>Enhanced analytics with machine learning predictions</li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default Integration;