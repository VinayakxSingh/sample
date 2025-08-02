import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section about">
          <h3 className="footer-heading">About Company</h3>
          <p className="footer-text">
            FERZ—Formalizing Emergent Reasoning Zones—advances the frontier of AI precision through deterministic governance. 
            In an era defined by probabilistic systems, we deliver frameworks that enforce clarity, consistency, and control 
            where others accept uncertainty.
          </p>
        </div>

        <div className="footer-section links">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/methodologies">Methodologies</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-links">
            <li>AI Consulting</li>
            <li>AI-Enablement Strategy</li>
            <li>Design of AI Governance Models</li>
            <li>IT Innovation and Modernization</li>
            <li>LASO(f) Implementation for AI Compliance</li>
            <li>Strategic Advisory services</li>
            <li>Within-Paradigm Improvements</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-heading">Address</h3>
          <div className="contact-info">
            <p className="contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>Headquartered in the Northern Virginia / Washington, D.C. Metropolitan Area<br />(Engagements available globally; consultations by appointment)</span>
            </p>
            <p className="contact-item">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+12123806044">+1 212 380 6044</a>
            </p>
            <p className="contact-item">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:contact@ferzconsulting.com">contact@ferzconsulting.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-logo">
            <h2>FERZ</h2>
            <p>— Formalizing Emergent Reasoning Zones</p>
          </div>
          
          <div className="quick-links">
            <h4>Quick Links</h4>
            <div className="quick-links-grid">
              <a href="/lasof">LASO(f)</a>
              <a href="/lasof-ag">LASO(f)-AG</a>
              <a href="/delia">DELIA</a>
              <a href="/mrcf">MRCF</a>
              <a href="/scm">SCM</a>
              <a href="/blockchain">Blockchain Architecture</a>
              <a href="/strata-g">Strata-G</a>
              <a href="/fbe">Ferz Behavioral Engine</a>
              <a href="/ai-capsules">AI Capsules</a>
            </div>
          </div>
          
          <div className="copyright">
            <p>© 2025 FERZ LLC. All rights reserved.</p>
            <div className="legal-links">
              <a href="/disclaimer">Disclaimer</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/ai-integrity">AI Integrity Statement</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
