import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Rocket, FlaskConical, Lightbulb, Clock } from 'lucide-react';
import './not-found.css';

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/', icon: <Home size={24} /> },
    { name: 'Products', path: '/products', icon: <Rocket size={24} /> },
    { name: 'Methodologies', path: '/methodologies', icon: <FlaskConical size={24} /> },
    { name: 'IP Portfolio', path: '/ip-portfolio', icon: <Lightbulb size={24} /> }
  ];

  return (
    <div className="not-found-container">
      <div className="not-found-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className={`not-found-content ${isVisible ? 'visible' : ''}`}>
        <div className="error-code-section">
          <div className="error-code">
            <span className="digit">4</span>
            <span className="digit">0</span>
            <span className="digit">4</span>
          </div>
          <div className="error-underline"></div>
        </div>
        
        <div className="error-message">
          <h1 className="error-title">Oops! Page Not Found</h1>
          <p className="error-description">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best explorers get lost sometimes!
          </p>
          <p className="error-time">
            <Clock size={16} />
            Current time: {currentTime.toLocaleTimeString()}
          </p>
        </div>

        <div className="action-buttons">
          <Link to="/" className="back-home-btn">
            <Home size={20} />
            <span className="btn-text">Back to Home</span>
          </Link>
          <button 
            className="go-back-btn"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={20} />
            <span className="btn-text">Go Back</span>
          </button>
        </div>

        <div className="quick-links-section">
          <h2 className="quick-links-title">Quick Navigation</h2>
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="quick-link-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="quick-link-icon">{link.icon}</span>
                <span className="quick-link-name">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="fun-fact">
          <p className="fun-fact-text">
            <Lightbulb size={16} />
            Fun fact: The 404 error was first introduced by Tim Berners-Lee in 1992!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 