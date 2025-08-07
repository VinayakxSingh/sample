import React from 'react';
import { ArrowRight, ShieldCheck, Target, Cpu, Lock, BookOpenCheck, BrainCircuit, CpuIcon, Code, Gauge, FileCode } from 'lucide-react';
import { useNavigate,Link } from 'react-router-dom';
import Threads from '../../components/reusables/threads/threads';
import ArticlesCarousel from '../../components/reusables/ArticleCarousel/ArticlesCarousel';
import SEO from '../../components/SEO/SEO';
import './homepage.css';



const HomePage = () => {
  const navigate = useNavigate();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FERZ - Formalizing Emergent Reasoning Zones",
    "description": "Leading AI governance and safety solutions for deterministic, reliable, and ethical AI systems at scale.",
    "url": "https://ferz.ai",
    "logo": "https://ferz.ai/logo.png",
    "sameAs": [
      "https://twitter.com/ferz_ai",
      "https://linkedin.com/company/ferz-ai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@ferz.ai"
    }
  };

  return (
    <>
      <SEO
        title="AI Governance & Safety Solutions"
        description="FERZ delivers deterministic AI governance and safety solutions. Transform probabilistic AI into reliable, ethical systems with our comprehensive frameworks and methodologies."
        keywords="AI governance, AI safety, deterministic AI, ethical AI, AI compliance, machine learning governance, AI risk management"
        url="/"
        structuredData={structuredData}
      />
      <main className="homepage" role="main" aria-labelledby="hero-title">
      <div className="threads-background" aria-hidden="true">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0, 0, 0]}
        />
      </div>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" id="hero-title">
             FERZ
            </h1>
            <p className="hero-subtitle">
Formalizing Emergent Reasoning Zones          
            </p>
            <div className="hero-cta">
              <button 
                className="cta-button" 
                aria-label="View our IP portfolio"
                onClick={() => navigate('/ip-portfolio')}
              >
                IP Portfolio
                <ArrowRight size={18} className="cta-icon" aria-hidden="true" />
              </button>
              <a href="#work" className="secondary-button" aria-label="Learn about our services">
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
          <ArticlesCarousel 
            autoplayDelay={3000}
            showPagination={true}
            showNavigation={true}
            maxArticles={6}
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
      </main>
    </>
  );
};

export default HomePage;