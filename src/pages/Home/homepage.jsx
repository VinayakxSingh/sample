import React from 'react';
import { ArrowRight, ShieldCheck, Target, Cpu, Lock, BookOpenCheck, BrainCircuit, CpuIcon, Code, Gauge, FileCode } from 'lucide-react';
import Threads from '../../components/threads/threads';
import { CardCarousel } from '../../components/reusables/articlesCarousels';
import './homepage.css';

const carouselImages = [
  {
    src: 'https://ferzconsulting.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-14-at-5.16.03-PM.jpeg',
    alt: 'AI Consulting Services'
  },
  {
    src: 'https://ferzconsulting.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-11.44.54-PM.jpeg',
    alt: 'Data Analytics Solutions'
  },
  {
    src: 'https://ferzconsulting.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-12-at-12.35.07-AM.jpeg',
    alt: 'Machine Learning Implementation'
  },
  {
    src: 'https://ferzconsulting.com/wp-content/uploads/2025/06/ai.jpg',
    alt: 'Artificial Intelligence Innovation'
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="threads-background">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0, 0, 0]}
        />
      </div>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
             FERZ
            </h1>
            <p className="hero-subtitle">
Formalizing Emergent Reasoning Zones          
            </p>
            <div className="hero-cta">
              <button className="cta-button">
                IP Portfolio
                <ArrowRight size={18} className="cta-icon" />
              </button>
              <a href="#work" className="secondary-button">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="intelligence-section">
        <div className="container">
          <h2 className="section-title">Structured Intelligence. Directed Potential</h2>
          
          <div className="intelligence-content">
            <div className="intelligence-text">
              <p className="intelligence-paragraph">
                Artificial intelligence advances rapidly—and often dangerously astray. Consider a consequential case: a sophisticated AI chatbot misinterpreted a straightforward financial instruction, transferring significant funds to an unintended account. The syntax was technically correct, but the intent was fundamentally missed. Trust wasn't merely damaged—it was broken in real time.
              </p>
              
              <p className="intelligence-paragraph highlight-text">
                <strong>FERZ—Formalizing Emergent Reasoning Zones—</strong>we address this critical gap between capability and reliability.
              </p>
              
              <p className="intelligence-paragraph">
                At FERZ, our approach is systematically deterministic—not reactively probabilistic—creating governance frameworks that bring linguistic precision to AI's inherent statistical variance.
              </p>
            </div>
            
            <div className="intelligence-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Target size={24} />
                </div>
                <h3>Precision Engineering</h3>
                <p>Deterministic AI outputs that align exactly with intentions</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3>Governance First</h3>
                <p>Robust frameworks for AI reliability and accountability</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Cpu size={24} />
                </div>
                <h3>Technical Excellence</h3>
                <p>Cutting-edge solutions for complex AI challenges</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Lock size={24} />
                </div>
                <h3>Risk Mitigation</h3>
                <p>Reducing AI-related risks in critical operations</p>
              </div>
            </div>
            
            <div className="intelligence-conclusion">
              <p className="cta-text1">
                Across regulated domains—law, healthcare, financial services, and government—we transform AI communication from approximate to exact, ensuring outputs align with intentions with deterministic certainty. Precision in AI isn't merely beneficial; it's foundational—the essential bridge between technological capability and operational reliability. We bring linguistics back to language, governance back to systems, and certainty back to environments where approximation creates unacceptable risk.
              </p>
              <p className="cta-text">
                <strong>Where does your AI fall short of deterministic precision?</strong> We've developed solutions others haven't yet conceptualized.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="carousel-section">
        <div className="container">
          <h2 className="section-title">Explore Our Articles</h2>
          <CardCarousel 
            images={carouselImages} 
            autoplayDelay={3000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">Explore Our Solutions</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <FileCode size={40} />
              </div>
              <h3 className="solution-title">LASO(f)</h3>
              <p className="solution-description">AI linguistic governance for regulatory compliance.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">
                <ShieldCheck size={40} />
              </div>
              <h3 className="solution-title">LASO(f)-AG</h3>
              <p className="solution-description">Constitutional control over AI system actions.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">
                <BrainCircuit size={40} />
              </div>
              <h3 className="solution-title">MRCF</h3>
              <p className="solution-description">Recursive cognitive enhancement for human-AI partnership.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">
                <Code size={40} />
              </div>
              <h3 className="solution-title">SCM</h3>
              <p className="solution-description">Deterministic semantic compression for AI.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">
                <Gauge size={40} />
              </div>
              <h3 className="solution-title">DELIA</h3>
              <p className="solution-description">Constraint-based enforcement for AI language and behavior.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;