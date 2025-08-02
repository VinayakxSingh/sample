import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = ({ 
  title = "Coming Soon", 
  subtitle = "We're working on something amazing!",
  description = "This page is currently under construction. Please check back later for updates.",
  showHomeButton = true
}) => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          <Clock size={48} />
        </div>
        <h1 className="coming-soon-title">{title}</h1>
        <h2 className="coming-soon-subtitle">{subtitle}</h2>
        <p className="coming-soon-description">{description}</p>
        
        {showHomeButton && (
          <Link to="/" className="coming-soon-button">
            Return Home <ArrowRight size={18} className="button-icon" />
          </Link>
        )}
        
        <div className="coming-soon-countdown">
          <div className="countdown-item">
            <span className="countdown-number">05</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-number">00</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-number">00</span>
            <span className="countdown-label">Minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
