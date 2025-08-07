import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
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
          <nav className="footer-nav" aria-label="Company pages">
            <ul className="footer-links">
              <li><Link to="/" aria-label="Go to homepage">Home</Link></li>
              <li><Link to="/about" aria-label="Go to about us page">About Us</Link></li>
              <li><Link to="/services" aria-label="Go to services page">Services</Link></li>
              <li><Link to="/products" aria-label="Go to products page">Products</Link></li>
              <li><Link to="/methodologies" aria-label="Go to methodologies page">Methodologies</Link></li>
              <li><Link to="/articles" aria-label="Go to articles page">Articles</Link></li>
              <li><Link to="/contact" aria-label="Go to contact page">Contact Us</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-section services">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-links" role="list" aria-label="Our services">
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
          <div className="contact-info" role="list" aria-label="Contact information">
            <p className="contact-item" role="listitem">
              <MapPin size={16} className="contact-icon" aria-hidden="true" />
              <span>Headquartered in the Northern Virginia / Washington, D.C. Metropolitan Area<br />(Engagements available globally; consultations by appointment)</span>
            </p>
            <p className="contact-item" role="listitem">
              <Phone size={16} className="contact-icon" aria-hidden="true" />
              <a href="tel:+12123806044" aria-label="Call us at +1 212 380 6044">+1 212 380 6044</a>
            </p>
            <p className="contact-item" role="listitem">
              <Mail size={16} className="contact-icon" aria-hidden="true" />
              <a href="mailto:contact@ferzconsulting.com" aria-label="Email us at contact@ferzconsulting.com">contact@ferzconsulting.com</a>
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
            <nav className="quick-links-nav" aria-label="Quick links to products and services">
              <div className="quick-links-grid" role="list" aria-label="Quick links list">
                <a href="/lasof" role="listitem" aria-label="Go to LASO(f) page">LASO(f)</a>
                <a href="/lasof-ag" role="listitem" aria-label="Go to LASO(f)-AG page">LASO(f)-AG</a>
                <a href="/delia" role="listitem" aria-label="Go to DELIA page">DELIA</a>
                <a href="/mrcf" role="listitem" aria-label="Go to MRCF page">MRCF</a>
                <a href="/scm" role="listitem" aria-label="Go to SCM page">SCM</a>
                <a href="/blockchain" role="listitem" aria-label="Go to Blockchain Architecture page">Blockchain Architecture</a>
                <a href="/strata-g" role="listitem" aria-label="Go to Strata-G page">Strata-G</a>
                <a href="/fbe" role="listitem" aria-label="Go to Ferz Behavioral Engine page">Ferz Behavioral Engine</a>
                <a href="/ai-capsules" role="listitem" aria-label="Go to AI Capsules page">AI Capsules</a>
              </div>
            </nav>
          </div>
          
          <div className="copyright">
            <p>© 2025 FERZ LLC. All rights reserved.</p>
            <nav className="legal-nav" aria-label="Legal pages">
              <div className="legal-links" role="list" aria-label="Legal links">
                <a href="/disclaimer" role="listitem" aria-label="Go to disclaimer page">Disclaimer</a>
                <a href="/privacy" role="listitem" aria-label="Go to privacy policy page">Privacy Policy</a>
                <a href="/ai-integrity" role="listitem" aria-label="Go to AI integrity statement page">AI Integrity Statement</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
