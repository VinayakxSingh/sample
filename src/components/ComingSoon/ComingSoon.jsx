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
    <main className="coming-soon-container" role="main" aria-labelledby="coming-soon-title">
      <div className="coming-soon-content">
        <div className="coming-soon-icon" aria-hidden="true">
          <Clock size={48} />
        </div>
        <h1 className="coming-soon-title" id="coming-soon-title">{title}</h1>
        <h2 className="coming-soon-subtitle">{subtitle}</h2>
        <p className="coming-soon-description">{description}</p>
        
        {showHomeButton && (
          <Link to="/" className="coming-soon-button" aria-label="Return to homepage">
            Return Home <ArrowRight size={18} className="button-icon" aria-hidden="true" />
          </Link>
        )}
        
        <div className="coming-soon-countdown" role="timer" aria-label="Estimated time until launch">
          <div className="countdown-item" role="listitem">
            <span className="countdown-number" aria-label="5 days">05</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-separator" aria-hidden="true">:</div>
          <div className="countdown-item" role="listitem">
            <span className="countdown-number" aria-label="0 hours">00</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-separator" aria-hidden="true">:</div>
          <div className="countdown-item" role="listitem">
            <span className="countdown-number" aria-label="0 minutes">00</span>
            <span className="countdown-label">Minutes</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComingSoon;
