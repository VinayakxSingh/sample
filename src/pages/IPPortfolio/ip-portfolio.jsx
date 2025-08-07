import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, ExternalLink, ArrowRight, MapPin, Layers, Zap, Shield, Brain, Network, FileText, Cpu, Lock, Users, Target, Globe, BookOpen, Code, Database, Settings, Activity, GitBranch, Workflow, BarChart3, Sparkles } from 'lucide-react';
import NetBackground from '../../components/reusables/NetBackground/NetBackground';
import './ip-portfolio.css';

const IPPortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredNode, setHoveredNode] = useState(null);

  const ipMap = [
    {
      id: 'mrcf',
      name: 'MRCF',
      fullName: 'Meyman Recursive Cognition Framework',
      position: { x: 20, y: 20 },
      category: 'foundation',
      description: 'Theoretical framework defining language and cognition evolution in recursive loops',
      connections: ['delia', 'laso', 'strata'],
      color: '#0f172a',
      icon: <Brain size={20} />
    },
    {
      id: 'delia',
      name: 'DELIA',
      fullName: 'Deterministic Executive Layer for Interpretable Alignment',
      position: { x: 50, y: 20 },
      category: 'governance',
      description: 'Flat-constraint governance engine for compliant, domain-specific output',
      connections: ['mrcf', 'laso', 'strata'],
      color: '#1e40af',
      icon: <Settings size={20} />
    },
    {
      id: 'laso',
      name: 'LASO(f)',
      fullName: 'Language and Semantic Optimization Framework',
      position: { x: 80, y: 20 },
      category: 'governance',
      description: 'Modular, deterministic governance layer for structured, compliant output',
      connections: ['mrcf', 'delia', 'laso-ag'],
      color: '#7c3aed',
      icon: <Code size={20} />
    },
    {
      id: 'laso-ag',
      name: 'LASO(f)-AG',
      fullName: 'Action Governance Framework',
      position: { x: 80, y: 50 },
      category: 'governance',
      description: 'Rule-based architecture for AI-initiated decisions and actions',
      connections: ['laso', 'strata'],
      color: '#dc2626',
      icon: <Workflow size={20} />
    },
    {
      id: 'strata',
      name: 'STRATA-G',
      fullName: 'Strategic Recursive Architecture for Real-Time AGI Governance',
      position: { x: 50, y: 65 },
      category: 'governance',
      description: 'Recursive logic spine for AGI oversight across regulated environments',
      connections: ['mrcf', 'delia', 'laso-ag', 'constitutional'],
      color: '#059669',
      icon: <GitBranch size={20} />
    },
    {
      id: 'constitutional',
      name: 'Constitutional Blockchain',
      fullName: 'Tamper-Proof Governance Layer for Autonomous Systems',
      position: { x: 20, y: 70 },
      category: 'governance',
      description: 'Deterministic governance substrate with tripartite structure',
      connections: ['strata', 'behavioral'],
      color: '#d97706',
      icon: <Lock size={20} />
    },
    {
      id: 'behavioral',
      name: 'FERZ Behavioral Engine™',
      fullName: 'Consequence-Based AI Adaptation',
      position: { x: 20, y: 90 },
      category: 'applied',
      description: 'Runtime adaptation system based on behavioral trajectories',
      connections: ['constitutional'],
      color: '#be185d',
      icon: <Activity size={20} />
    },
    {
      id: 'scm',
      name: 'SCM',
      fullName: 'Semantic Condensation Methodology',
      position: { x: 80, y: 85 },
      category: 'applied',
      description: 'Reduces language complexity without losing meaning',
      connections: ['laso-ag'],
      color: '#0891b2',
      icon: <BarChart3 size={20} />
    }
  ];

  const portfolioTiers = [
    {
      tier: 'Tier 1',
      title: 'Foundational Philosophy',
      description: 'Philosophical foundations and theoretical frameworks',
      icon: <Brain size={24} />,
      color: '#1a1a1a',
      items: [
        {
          id: 'mrcf',
          name: 'MRCF - Meyman Recursive Cognition Framework',
          description: 'MRCF is a theoretical framework that defines how language and cognition evolve in recursive loops. It provides the philosophical scaffolding for all FERZ innovations, emphasizing the role of linguistic precision in enabling sophisticated reasoning.',
          value: 'Its value lies in orienting FERZ\'s architecture around expressibility as a precondition for intelligence—a foundational premise largely absent from conventional AI design paradigms.',
          status: 'Download Executive Overview PDF',
          comingSoon: true
        }
      ]
    },
    {
      tier: 'Tier 2',
      title: 'Core AI-Governance Frameworks',
      description: 'Comprehensive governance frameworks for safe and compliant AI',
      icon: <Shield size={24} />,
      color: '#2a2a2a',
      items: [
        {
          id: 'delia',
          name: 'DELIA – Deterministic Executive Layer for Interpretable Alignment',
          description: 'DELIA is a flat-constraint governance engine that transforms AI-generated language into compliant, domain-specific output using stateless, single-pass processing. Its architecture enables deterministic transformations through declarative constraints—delivering high-speed, auditable results suitable for legal, medical, financial, and operational content.',
          value: 'DELIA supports hybrid execution paths and structured validation without the complexity of multi-tier rule propagation, making it ideal for regulated industries requiring both speed and compliance.',
          status: 'Download Executive Overview PDF',
          comingSoon: false
        },
        {
          id: 'laso',
          name: 'LASO(f) – Language and Semantic Optimization Framework',
          description: 'LASO(f) is a modular, deterministic governance layer that transforms AI-generated language into structured, compliant, and context-specific output across eight interdependent tiers—from syntax to discourse.',
          value: 'Its deterministic architecture guarantees traceable, auditable transformations aligned with legal, institutional, or editorial standards—making it valuable across sectors like healthcare, finance, defense, and publishing.',
          status: 'Download Executive Overview PDF',
          comingSoon: true
        },
        {
          id: 'laso-ag',
          name: 'LASO(f)-AG – Action Governance Framework',
          description: 'LASO(f)-AG extends LASO(f)\'s rule-based architecture into the domain of AI-initiated decisions. It validates and constrains actions across nine governance tiers—ranging from authorization and safety to reversibility and human interaction.',
          value: 'Its proactive governance model ensures that AI systems act within boundaries that are deterministic, explainable, and verifiably safe.',
          status: 'Download Executive Overview PDF',
          comingSoon: true
        },
        {
          id: 'strata',
          name: 'STRATA-G – Strategic Recursive Architecture for Real-Time AGI Governance',
          description: 'STRATA-G defines the recursive logic spine for AGI oversight across regulated, adversarial, and high-stakes environments. By coordinating six modular layers—from constraint enforcement and cultural integration to safe self-modification—STRATA-G enables deterministic adaptation without sacrificing speed or interpretability.',
          value: 'It governs how AGI systems reason and adapt, supporting real-time explainability, triage coordination, and jurisdictional constraint integration.',
          status: 'View STRATA-G Product Page',
          comingSoon: false
        },
        {
          id: 'constitutional',
          name: 'Constitutional Blockchain – A Tamper-Proof Governance Layer for Autonomous Systems',
          description: 'The Constitutional Blockchain is a deterministic governance substrate enforcing a tripartite structure—Legislative, Executive, and Judicial branches—within AGI ecosystems. It codifies policy into immutable chains, blocks unconstitutional actions at runtime, and enables legal-style precedent adjudication using BFT consensus and hardware-integrated emergency triggers.',
          value: 'Designed for domains like healthcare, finance, defense, and civil infrastructure, it ensures AGI action remains within transparent, jurisdictional bounds.',
          status: 'View Constitutional Blockchain Product Page',
          comingSoon: false
        },
        {
          id: 'behavioral',
          name: 'FERZ Behavioral Engine™ – Consequence-Based AI Adaptation',
          description: 'The FERZ Behavioral Engine™ is a runtime adaptation system that modifies AI responses based on computed user behavioral trajectories rather than immediate inputs or static preferences. Using the proprietary Formula of Fate™ mathematical framework, it tracks effort, constraint, and support signals across behavioral domains.',
          value: 'Its deterministic vector modeling enables predictive intervention 3-5 steps earlier than sentiment-based systems, making it valuable for applications requiring sustained behavioral change or decision acceleration.',
          status: 'View FERZ Behavioral Engine Product Page',
          comingSoon: false
        }
      ]
    },
    {
      tier: 'Tier 3',
      title: 'Applied Solutions',
      description: 'Practical methodologies and implementation frameworks',
      icon: <Zap size={24} />,
      color: '#3a3a3a',
      items: [
        {
          id: 'scm',
          name: 'SCM – Semantic Condensation Methodology',
          description: 'SCM reduces language complexity without losing meaning, enabling high-fidelity summarization, compression, and reformulation for regulated or knowledge-dense contexts.',
          value: 'Unlike generative summarizers, SCM maintains semantic and causal traceability, preserving logical integrity and enabling downstream validation.',
          status: 'Download Executive Overview PDF',
          comingSoon: false
        }
      ]
    }
  ];

  return (
    <main className="ipportfolio-page">
      {/* Hero Section */}
      <section className="ipportfolio-hero">
        <div className="ipportfolio-hero-background">
          <NetBackground />
          <div className="hero-overlay"></div>
        </div>
        <div className="ipportfolio-hero-content">
          <div className="hero-badge">
            <Network size={16} />
            <span>Intellectual Property Portfolio</span>
          </div>
          <h1 className="ipportfolio-main-title">
            FERZ Intellectual Property Portfolio
          </h1>
          <p className="ipportfolio-subtitle">
            Governance Frameworks for Safe, Compliant AI
          </p>
          <p className="ipportfolio-overview">
            Explore the Blueprint Behind Governable, Safe, and Auditable AI. FERZ's intellectual property portfolio represents a vertically integrated innovation stack designed to make advanced AI systems safe, interpretable, and compliant by default. Every asset—from foundational theory to enterprise deployment frameworks—exists to address a core question: How do we ensure AI acts within boundaries we can trust?
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Core IP Assets</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Technology Tiers</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Compliance Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="section-nav">
        <div className="nav-container">
          <button 
            className={`nav-btn ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            Portfolio Overview
          </button>
          <button 
            className={`nav-btn ${activeSection === 'map' ? 'active' : ''}`}
            onClick={() => setActiveSection('map')}
          >
            IP Map
          </button>
          <button 
            className={`nav-btn ${activeSection === 'tiers' ? 'active' : ''}`}
            onClick={() => setActiveSection('tiers')}
          >
            Technology Tiers
          </button>
        </div>
      </section>

      {/* Interactive IP Map Section */}
      {activeSection === 'map' && (
        <section className="ip-map-section">
          <div className="section-header">
            <h2>Interactive IP Portfolio Map</h2>
            <p>This map organizes FERZ's portfolio by tier—from philosophical foundations to applied solutions—offering partners and investors a transparent view into how each layer contributes to market differentiation, regulatory alignment, and long-term defensibility.</p>
          </div>
          <div className="ip-map-container">
            <div className="ip-map">
              {/* Connection Lines */}
              <svg className="connection-lines" width="100%" height="100%">
                {ipMap.map((node) => 
                  node.connections.map((connectionId) => {
                    const connection = ipMap.find(n => n.id === connectionId);
                    if (!connection) return null;
                    
                    const isActive = hoveredNode === node.id || hoveredNode === connectionId;
                    
                    return (
                      <line
                        key={`${node.id}-${connectionId}`}
                        x1={`${node.position.x}%`}
                        y1={`${node.position.y}%`}
                        x2={`${connection.position.x}%`}
                        y2={`${connection.position.y}%`}
                        stroke={isActive ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}
                        strokeWidth={isActive ? "2" : "1"}
                        className="connection-line"
                      />
                    );
                  })
                )}
              </svg>
              {/* IP Nodes */}
              {ipMap.map((node) => (
                <div
                  key={node.id}
                  className={`ip-node ${node.category} ${hoveredNode === node.id ? 'hovered' : ''}`}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    backgroundColor: node.color
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="node-header">
                    <div className="node-icon">
                      {node.icon}
                    </div>
                    <div className="node-category">
                      {node.category}
                    </div>
                  </div>
                  <div className="node-content">
                    <h3>{node.name}</h3>
                    <p>{node.fullName}</p>
                  </div>
                  <div className="node-footer">
                    <div className="node-connections-count">
                      {node.connections.length} connections
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="map-legend">
              <div className="legend-item">
                <div className="legend-color foundation"></div>
                <span>Foundation</span>
              </div>
              <div className="legend-item">
                <div className="legend-color governance"></div>
                <span>Governance</span>
              </div>
              <div className="legend-item">
                <div className="legend-color applied"></div>
                <span>Applied</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology Tiers Section */}
      {activeSection === 'tiers' && (
        <section className="tiers-section">
          <div className="section-header">
            <h2>Technology Development Tiers</h2>
            <p>From philosophical foundations to applied solutions</p>
          </div>
          <div className="tiers-container">
            {portfolioTiers.map((tier, index) => (
              <div key={tier.tier} className="tier-section">
                <div className="tier-header">
                  <div className="tier-icon" style={{ backgroundColor: tier.color }}>
                    {tier.icon}
                  </div>
                  <div className="tier-info">
                    <h3>{tier.title}</h3>
                    <p>{tier.description}</p>
                  </div>
                </div>
                <div className="tier-items">
                  {tier.items.map((item) => (
                    <div key={item.id} className="tier-item">
                      <div className="item-header">
                        <h4>{item.name}</h4>
                        <div className="item-status">
                          {item.comingSoon ? (
                            <span className="status-badge coming-soon">Coming Soon</span>
                          ) : (
                            <span className="status-badge available">Available</span>
                          )}
                        </div>
                      </div>
                      <p className="item-description">{item.description}</p>
                      <p className="item-value">{item.value}</p>
                      <div className="item-actions">
                        <button className="btn-secondary">
                          <FileText size={16} />
                          {item.status}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <section className="overview-section">
          <div className="section-header">
            <h2>Portfolio Overview</h2>
            <p>Comprehensive intellectual property assets driving AI innovation</p>
          </div>
          
          <div className="overview-grid">
            {ipMap.map((ip) => (
              <div key={ip.id} className="ip-card">
                <div className="card-header" style={{ backgroundColor: ip.color }}>
                  <div className="card-header-content">
                    <div className="card-icon">
                      {ip.icon}
                    </div>
                    <div className="card-title">
                      <h3>{ip.name}</h3>
                      <span className="card-category">{ip.category}</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h4>{ip.fullName}</h4>
                  <p>{ip.description}</p>
                  <div className="card-meta">
                    <div className="meta-item">
                      <GitBranch size={14} />
                      <span>{ip.connections.length} connections</span>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button className="btn-secondary">
                      <Download size={16} />
                      Executive Summary
                    </button>
                    <button className="btn-primary">
                      <ExternalLink size={16} />
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Explore FERZ's IP Portfolio?</h2>
          <p>Discover how our intellectual property can transform your AI initiatives</p>
          <div className="cta-buttons">
            <button className="btn-primary">
              Schedule a Consultation
              <ChevronRight size={16} />
            </button>
            <button className="btn-secondary">
              Download Portfolio PDF
              <Download size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IPPortfolioPage; 