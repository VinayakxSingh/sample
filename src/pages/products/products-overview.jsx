import React from 'react';
import { ArrowRight, Check, Cloud, Shield, Cpu, CpuIcon, Code, Brain, Scale, Activity, Database, Zap, Server, Lock, Cpu as CpuIcon2, Network, 
    Wifi, HardDrive, GitMerge ,HeartPulse,BarChart3,BrainCircuit} from 'lucide-react';
import Waves from '../../components/reusables/waves/waves';
import './products-overview.css';

const ProductPage = () => {
  const productSuite = [
    {
      name: 'DELIA',
      fullName: 'Deterministic Executive Layer for Interpretable Alignment',
      description: 'Govern how AI transforms language.',
      features: [
        'Transforms AI-generated language into compliant, domain-specific output',
        'Uses stateless, single-pass processing for deterministic transformations',
        'Delivers high-speed, auditable results for legal, medical, and financial content',
        'Supports hybrid execution paths and structured validation'
      ],
      icon: <Code size={32} />
    },
    {
      name: 'LASO(f)',
      fullName: 'The Language Constitution for AI',
      description: 'Govern what AI says.',
      features: [
        'Enforces linguistic precision and compliance integrity',
        'Transforms probabilistic outputs into structured, traceable documents',
        'Supports legal, clinical, financial, and enterprise-grade text validation'
      ],
      icon: <Shield size={20} />
    },
    {
      id: 3,
      name: 'LASO(f)-AG',
      fullName: 'LASO Framework - Air-Gapped Edition',
      description: 'Secure, isolated deployment of the LASO framework designed for high-security environments requiring maximum protection.',
      features: [
        'Air-gapped deployment',
        'Reduced attack surface',
        'Offline operation',
        'Secure data handling',
        'Periodic secure sync',
        'Compliance certified'
      ],
      icon: <Lock size={20} />
    },
    {
      id: 4,
      name: 'STRATA-G',
      fullName: 'Structured Trace Analysis & Governance',
      description: 'Comprehensive traceability and governance platform for AI systems with end-to-end audit capabilities.',
      features: [
        'End-to-end traceability',
        'Audit logging',
        'Compliance reporting',
        'Version control',
        'Access control',
        'Data lineage'
      ],
      icon: <Code size={20} />
    },
    {
      id: 5,
      name: 'Constitutional Blockchain',
      fullName: 'Constitutional Blockchain for AI',
      description: 'Decentralized infrastructure for AI governance, consensus, and transparent decision-making.',
      features: [
        'Decentralized governance',
        'Immutable audit trail',
        'Smart contract integration',
        'Consensus mechanisms',
        'Token economics',
        'Interoperability'
      ],
      icon: <Server size={20} />
    },
    {
      id: 6,
      name: 'FERZ Behavioral Engine',
      fullName: 'Framework for Ethical & Responsible Zettascale AI',
      description: 'Advanced behavioral control and ethical constraint system ensuring AI systems remain aligned with human values.',
      features: [
        'Ethical constraint enforcement',
        'Behavioral monitoring',
        'Value alignment',
        'Risk assessment',
        'Human-in-the-loop',
        'Explainability tools'
      ],
      icon: <Zap size={20} />
    }
  ];

  // Use cases data
  const useCases = [
    {
      id: 1,
      title: 'Legal & Compliance',
      description: 'Automated compliance checking and legal document analysis with full audit trails.',
      icon: <Scale size={18} />
    },
    {
      id: 2,
      title: 'Healthcare',
      description: 'Secure, compliant AI for medical diagnosis and patient data analysis.',
      icon: <HeartPulse size={18} />
    },
    {
      id: 3,
      title: 'Financial Services',
      description: 'Fraud detection, risk assessment, and algorithmic trading with built-in compliance.',
      icon: <BarChart3 size={18} />
    },
    {
      id: 4,
      title: 'AI Alignment',
      description: 'Ensuring AI systems remain aligned with human values and intentions.',
      icon: <BrainCircuit size={18} />
    },
    {
      id: 5,
      title: 'Data Transformation',
      description: 'Secure and verifiable data processing pipelines with full lineage tracking.',
      icon: <Database size={18} />
    },
    {
      id: 6,
      title: 'Autonomous Systems',
      description: 'Reliable, verifiable control systems for autonomous vehicles and robotics.',
      icon: <CpuIcon size={18} />
    }
  ];

  // Design principles data
  const principles = [
    {
      id: 1,
      title: 'Deterministic',
      description: 'Guaranteed consistent outputs for identical inputs, ensuring predictable behavior across all environments.',
      icon: <Check size={20} />
    },
    {
      id: 2,
      title: 'Traceable',
      description: 'Complete audit trail of all operations and decisions, enabling full transparency and accountability.',
      icon: <Check size={20} />
    },
    {
      id: 3,
      title: 'Domain-aware',
      description: 'Contextual understanding and adaptation to specific industry requirements and constraints.',
      icon: <Check size={20} />
    },
    {
      id: 4,
      title: 'Future-ready',
      description: 'Architected for scalability and adaptability to emerging technologies and standards.',
      icon: <Check size={20} />
    }
  ];

  // Deployment options data
  const deploymentOptions = [
    {
      id: 1,
      title: 'Cloud-native',
      description: 'Fully managed cloud service with automatic scaling and updates.',
      icon: <Cloud size={20} />
    },
    {
      id: 2,
      title: 'Air-gapped',
      description: 'Completely isolated deployment for maximum security and compliance.',
      icon: <HardDrive size={20} />
    },
    {
      id: 3,
      title: 'Edge-ready',
      description: 'Lightweight deployment optimized for edge computing and IoT devices.',
      icon: <Wifi size={20} />
    },
    {
      id: 4,
      title: 'Hybrid',
      description: 'Flexible deployment across multiple environments with centralized management.',
      icon: <GitMerge size={20} />
    }
  ];

  return (
    <div className="prod-products-overview">
      {/* Hero Section */}
      <section className="prod-products-hero">
        <div className="prod-waves-container">
          <Waves 
            lineColor="#fff" 
            backgroundColor="#000"
            waveSpeedX={0.008}
            waveSpeedY={0.005}
            waveAmpX={32}
            waveAmpY={16}
            xGap={10}
            yGap={32}
            friction={0.925}
            tension={0.005}
            maxCursorMove={100}
          />
        </div>
        <div className="prod-hero-content">
          <h1 className="prod-hero-title">
            The Future of AI is Deterministic
          </h1>
          <p className="prod-hero-subtitle">
            Our comprehensive suite of AI governance and safety solutions ensures reliable, 
            transparent, and ethical AI systems at scale.
          </p>
          <div className="prod-hero-cta">
            <a href="#contact" className="prod-btn">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="prod-container">
        {/* Intro Text */}
        <section className="prod-section">
          <div className="prod-content-section">
            <h2 className="prod-intro-title">
              Leading the Future of <span className="gradient-text">AI Governance</span>
            </h2>
            <p className="prod-intro-text">
              FERZ delivers a comprehensive suite of AI governance and safety solutions designed to 
              ensure reliable, transparent, and ethical AI systems at scale. Our platform provides 
              the tools and frameworks needed to build, deploy, and manage AI systems with confidence.
            </p>
            <div className="prod-intro-divider"></div>
          </div>
        </section>

        {/* Product Suite Section */}
        <section className="prod-section" id="products">
          <h2 className="prod-section-title">Our Product Suite</h2>
          <p className="prod-section-subtitle">
            Comprehensive solutions for building and managing safe, reliable, and ethical AI systems at scale.
          </p>
          
          <div className="prod-product-list">
            {productSuite.map((product) => (
              <div key={product.id} className="prod-product-item">
                <div className="prod-product-header">
                  <span className="prod-product-number">0{product.id}</span>
                  <div>
                    <h3 className="prod-product-name">{product.name}</h3>
                    <p className="prod-product-fullname">{product.fullName}</p>
                  </div>
                </div>
                <p className="prod-product-description">{product.description}</p>
                <ul className="prod-feature-list">
                  {product.features.map((feature, index) => (
                    <li key={index} className="prod-feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="prod-section" id="use-cases">
          <h2 className="prod-section-title">Use Cases</h2>
          <p className="prod-section-subtitle">
            Empowering industries with safe and reliable AI solutions for critical applications.
          </p>
          
          <div className="prod-use-cases">
            {useCases.map((useCase) => (
              <div key={useCase.id} className="prod-use-case">
                <h3>
                  {useCase.icon}
                  {useCase.title}
                </h3>
                <p>{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Principles Section */}
        <section className="prod-section" id="principles">
          <h2 className="prod-section-title">Design Principles</h2>
          <p className="prod-section-subtitle">
            Our core principles guide every aspect of our technology and solutions.
          </p>
          
          <div className="prod-principles">
            {principles.map((principle) => (
              <div key={principle.id} className="prod-principle">
                <div className="prod-principle-icon">
                  {principle.icon}
                </div>
                <div className="prod-principle-content">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deployment Options Section */}
        <section className="prod-section" id="deployment">
          <h2 className="prod-section-title">Deployment Flexibility</h2>
          <p className="prod-section-subtitle">
            Choose the deployment option that best fits your organization's needs.
          </p>
          
          <div className="prod-deployment-options">
            {deploymentOptions.map((option) => (
              <div key={option.id} className="prod-deployment-option">
                <h3>
                  {option.icon}
                  {option.title}
                </h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;