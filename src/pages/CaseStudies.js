import React from "react";
import Layout from "../components/Layout";

const CaseStudies = () => (
  <Layout>
    <section className="case-studies-section">
      <h2>Customer Success Stories</h2>
      <p>We're currently working with organizations across different industries to implement Parkeze technology. Detailed case studies with real metrics and results will be available soon as our deployments are completed.</p>
      
      {/* Coming Soon Case Studies */}
      <div className="case-study-card">
        <div className="case-study-header">
          <div className="case-study-title">University Campus Deployment</div>
          <div className="case-study-subtitle">Educational Institution • Coming Soon</div>
        </div>
        <div className="case-study-content">
          <p><strong>Project Status:</strong> Working with a large university campus to implement smart parking solutions across student, faculty, and visitor parking areas.</p>
          
          <p><strong>Expected Outcomes:</strong> Improved parking efficiency, reduced student complaints, and better resource utilization. Comprehensive student satisfaction surveys will be conducted.</p>
          
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🎓</div>
            <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Case study in progress</p>
            <p><em>Results and metrics coming soon</em></p>
          </div>
        </div>
      </div>

      <div className="case-study-card">
        <div className="case-study-header">
          <div className="case-study-title">Smart City Implementation</div>
          <div className="case-study-subtitle">Major Metropolitan Area • Coming Soon</div>
        </div>
        <div className="case-study-content">
          <p><strong>Project Status:</strong> Currently in deployment phase with a major metropolitan downtown area. The implementation includes comprehensive smart parking network across multiple city blocks.</p>
          
          <p><strong>Expected Outcomes:</strong> We anticipate significant improvements in traffic flow, parking revenue, and citizen satisfaction. Detailed metrics will be available upon project completion.</p>
          
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🏙️</div>
            <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Case study in progress</p>
            <p><em>Results and metrics coming soon</em></p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ marginTop: '60px', padding: '40px', background: 'linear-gradient(135deg, #004d40, #00796b)', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
        <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '20px' }}>Interested in Being a Case Study?</h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#e0f2f1' }}>
          We're looking for forward-thinking organizations to partner with on implementing smart parking solutions. Be among the first to showcase the transformative impact of Parkeze technology.
        </p>
        <a href="/#contact-form" style={{ 
          display: 'inline-block',
          padding: '15px 30px',
          backgroundColor: 'white',
          color: '#004d40',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          fontSize: '1.1rem',
          transition: 'transform 0.2s ease'
        }}>
          Contact Us for Partnership
        </a>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;