import React, { useState } from "react";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Get API key from environment variable or use a default
      const apiKey = process.env.REACT_APP_WEB3FORMS_API_KEY || '58d8002c-0c8a-4a3a-9567-353b1d4aacb9';
      
      // Prepare form data for Web3Forms
      const web3FormsData = new FormData();
      web3FormsData.append('access_key', apiKey);
      web3FormsData.append('name', formData.name);
      web3FormsData.append('email', formData.email);
      web3FormsData.append('company', formData.company || 'Not specified');
      web3FormsData.append('inquiry_subject', formData.subject);
      web3FormsData.append('message', formData.message);
      
      // Web3Forms metadata
      web3FormsData.append('from_name', 'Parkeze Contact Form');
      web3FormsData.append('subject', 'New Contact Form Submission from Parkeze Website');
      web3FormsData.append('redirect', 'false'); // Don't redirect, handle response in JavaScript
      
      // Add current page URL for reference
      web3FormsData.append('source_url', window.location.href);
      web3FormsData.append('timestamp', new Date().toISOString());

      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormsData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Web3Forms error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    if (email) {
      console.log('Newsletter subscription:', email);
      // Handle newsletter subscription
      e.target.reset();
      alert('Thank you for subscribing! We\'ll keep you updated on our latest developments.');
    }
  };

  return (
    <Layout showHero={true}>
      {/* About Section */}
      <section id="about" className="about">
        <h2>Revolutionizing Parking with Smart Technology</h2>
        <p>At Parkeze, we're transforming the parking experience through cutting-edge IoT sensor technology and intelligent software solutions. Our comprehensive platform bridges the gap between cities, businesses, and drivers, creating a seamless ecosystem that eliminates parking frustration forever.</p>
        <p>Founded with the vision of making parking effortless, we combine real-time data analytics, advanced sensor networks, and user-friendly interfaces to deliver parking solutions that work for everyone—from individual drivers searching for a spot to city planners optimizing urban mobility.</p>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>The Parking Problem</h2>
        <p>Parking inefficiency costs cities billions annually and frustrates millions of drivers daily. Our technology addresses these challenges head-on:</p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">30%</div>
            <div className="stat-label">of urban traffic is drivers searching for parking</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">$87B</div>
            <div className="stat-label">annual cost of parking inefficiency in the US</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8.5 min</div>
            <div className="stat-label">average time spent looking for parking</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99%</div>
            <div className="stat-label">accuracy rate of our sensor technology</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Parkeze?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <div className="feature-title">Real-Time Accuracy</div>
            <div className="feature-description">
              Our advanced sensors provide 99% accurate, real-time parking space detection with instant updates to drivers and operators.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <div className="feature-title">Seamless Integration</div>
            <div className="feature-description">
              Easy-to-implement APIs and flexible protocols that integrate with existing parking infrastructure and city management systems.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <div className="feature-title">User-Friendly Apps</div>
            <div className="feature-description">
              Intuitive mobile applications for drivers and comprehensive dashboards for operators with powerful analytics and reporting.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Energy Efficient</div>
            <div className="feature-description">
              Low-power sensors with extended battery life and solar charging options for sustainable, long-term deployment.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <div className="feature-title">Enterprise Security</div>
            <div className="feature-description">
              Bank-level encryption, secure data transmission, and compliance with industry standards for data protection and privacy.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <div className="feature-title">Advanced Analytics</div>
            <div className="feature-description">
              Comprehensive insights into parking patterns, revenue optimization, and urban planning data to drive informed decisions.
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="case-studies-section">
        <h2>Success Stories</h2>
        <p>See how organizations worldwide are transforming their parking operations with Parkeze solutions:</p>
        
        <div className="features-grid">
          <div className="case-study-card">
            <div className="case-study-header">
              <div className="case-study-title">Case Study Coming Soon</div>
              <div className="case-study-subtitle">Educational Institution</div>
            </div>
            <div className="case-study-content">
              <p>University and college campus implementations are in progress. We'll share detailed results and student satisfaction metrics once available.</p>
              <div style={{ textAlign: 'center', padding: '30px', color: '#666' }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎓</div>
                <p><em>Results and metrics coming soon</em></p>
              </div>
            </div>
          </div>

          <div className="case-study-card">
            <div className="case-study-header">
              <div className="case-study-title">Case Study Coming Soon</div>
              <div className="case-study-subtitle">Smart City Implementation</div>
            </div>
            <div className="case-study-content">
              <p>We're currently working with several major metropolitan areas to deploy comprehensive smart parking solutions. Detailed case studies will be available soon.</p>
              <div style={{ textAlign: 'center', padding: '30px', color: '#666' }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏙️</div>
                <p><em>Results and metrics coming soon</em></p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/case-studies" style={{ 
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#00796b',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            transition: 'background-color 0.3s ease'
          }}>
            View All Case Studies
          </a>
        </div>
      </section>

      {/* Demo Section */}
      <section className="animation-container">
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Live Parking Data Visualization</h3>
          <p>Experience real-time parking availability updates as they happen</p>
          <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: '0.8' }}>Interactive demo coming soon</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Parking Experience?</h2>
        <p>Join cities and businesses worldwide who are already benefiting from smarter parking solutions. Be among the first to experience the future of parking.</p>
        <form className="subscribe-form" onSubmit={handleSubscribeSubmit}>
          <input type="email" name="email" placeholder="Enter your email address" required />
          <button type="submit">Get Early Access</button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: '0.9' }}>
          No spam, just updates on our launch and exclusive early access opportunities.
        </p>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="coming-soon">
        <h2>Get In Touch</h2>
        <p>Whether you're a city planner, parking operator, or technology integrator, we'd love to discuss how Parkeze can solve your parking challenges. Our team of experts is ready to help you implement the perfect solution for your needs.</p>
        
        <form className="contact-form" onSubmit={handleContactSubmit}>
          {/* Web3Forms hidden fields */}
          <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_API_KEY || 'YOUR_WEB3FORMS_API_KEY_HERE'} />
          <input type="hidden" name="from_name" value="Parkeze Contact Form" />
          <input type="hidden" name="subject" value="New Contact Form Submission from Parkeze Website" />
          
          {/* Honeypot field for spam protection */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Company/Organization</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="inquiry_subject">Subject *</label>
            <input 
              type="text" 
              id="inquiry_subject" 
              name="inquiry_subject" 
              value={formData.subject}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your parking challenges and how we can help..." 
              required
            />
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="form-success">
              Thank you for your message! We'll get back to you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-error">
              Sorry, there was an error sending your message. Please try again or email us directly.
            </div>
          )}
        </form>

        <div className="partnership-opportunities">
          <h3>Partnership Opportunities</h3>
          <ul className="standard-list">
            <li>Municipal partnerships for smart city initiatives</li>
            <li>Technology integration with existing parking systems</li>
            <li>Pilot programs for commercial properties</li>
            <li>Research collaborations with academic institutions</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default App;
