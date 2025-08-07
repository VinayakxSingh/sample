import React from 'react';
import { ArrowRight, Check, Brain, Code, Shield, Database, Zap, Cpu, Network, 
    GitMerge, BarChart3, BrainCircuit, Layers, Compass, Target, Lock} from 'lucide-react';
import Waves from '../../components/reusables/waves/waves';
import SEO from '../../components/SEO/SEO';
import Breadcrumb from '../../components/SEO/Breadcrumb';
import './methodologies-overview.css';

const MethodologiesPage = () => {
  const methodologies = [
    {
      id: 1,
      name: 'MRCF',
      fullName: 'Meyman Recursive Cognition Framework™',
      description: 'A structured system for recursive thinking and inquiry design.',
      features: [
        'Enables four-tiered prompts: Descriptive → Analytical → Strategic → Ontological',
        'Optimizes prompt design, reflection workflows, and governance audits',
        'Teaches intellectual agency and precision-driven reasoning'
      ],
      icon: <Brain size={32} />
    },
    {
      id: 2,
      name: 'SCM',
      fullName: 'Semantic Condensation Methodology™',
      description: 'Compress unstructured knowledge into AI-readable, verifiable structures.',
      features: [
        'Reduces 100k+ character documents into validated 10–20k artifacts',
        'Preserves structured rules, metrics, and compliance-critical content',
        'Embeds cryptographic audit signatures and semantic drift tests'
      ],
      icon: <Code size={32} />
    },
    {
      id: 3,
      name: 'AC',
      fullName: 'AI Capsule™',
      description: 'Encode complete system architectures into constitutional artifacts for autonomous reconstruction.',
      features: [
        'Transforms technical libraries into single JSON constitutional artifacts',
        'Enables 99%+ reconstruction fidelity from capsule specifications alone',
        'Supports zero-trust deployment with cryptographic validation and audit trails'
      ],
      icon: <Shield size={32} />
    }
  ];

  // Why Methodologies Matter
  const whyMatter = [
    {
      id: 1,
      title: 'Upstream rigor for deterministic systems',
      description: 'Ensures structured, predictable outcomes across all AI operations.',
      icon: <Target size={18} />
    },
    {
      id: 2,
      title: 'Cognitive scaffolding for complex reasoning',
      description: 'Provides frameworks for handling intricate decision-making processes.',
      icon: <BrainCircuit size={18} />
    },
    {
      id: 3,
      title: 'Compression pipelines for document-to-governance workflows',
      description: 'Streamlines the transformation of raw data into governed outputs.',
      icon: <Database size={18} />
    },
    {
      id: 4,
      title: 'Domain-agnostic repeatability for scale and audit',
      description: 'Enables consistent application across different domains and contexts.',
      icon: <Layers size={18} />
    }
  ];

  // Core Principles
  const principles = [
    {
      id: 1,
      title: 'Domain-independent',
      description: 'Applicable across any industry or use case without modification.',
      icon: <Check size={20} />
    },
    {
      id: 2,
      title: 'Formally defined',
      description: 'Precise, mathematical frameworks with clear boundaries and rules.',
      icon: <Check size={20} />
    },
    {
      id: 3,
      title: 'Composable',
      description: 'Can be combined and integrated across different applications.',
      icon: <Check size={20} />
    },
    {
      id: 4,
      title: 'Governance-focused',
      description: 'Built with compliance, traceability, and auditability in mind.',
      icon: <Check size={20} />
    }
  ];

  // Integration with Products
  const integrations = [
    {
      id: 1,
      methodology: 'MRCF',
      feedsInto: 'LASO(f), Tsutka',
      purpose: 'Structured inquiry, prompt recursion',
      icon: <Brain size={20} />
    },
    {
      id: 2,
      methodology: 'SCM',
      feedsInto: 'LASO(f), LASO(f)-AG',
      purpose: 'Semantic compression, pre-governance staging',
      icon: <Code size={20} />
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "FERZ AI Methodologies",
    "description": "Domain-independent, formally defined systems for structuring thought, transforming unstructured input, and scaling cognition across teams and AI models.",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "name": "MRCF - Meyman Recursive Cognition Framework",
        "description": "A structured system for recursive thinking and inquiry design."
      },
      {
        "@type": "CreativeWork",
        "name": "SCM - Semantic Condensation Methodology", 
        "description": "Compress unstructured knowledge into AI-readable, verifiable structures."
      },
      {
        "@type": "CreativeWork",
        "name": "AC - AI Capsule",
        "description": "Encode complete system architectures into constitutional artifacts for autonomous reconstruction."
      }
    ]
  };

  return (
    <>
      <SEO
        title="AI Methodologies & Frameworks"
        description="FERZ methodologies: MRCF, SCM, and AI Capsule. Domain-independent frameworks for structuring thought and scaling cognition across AI systems."
        keywords="AI methodologies, MRCF, SCM, AI Capsule, cognitive frameworks, AI governance methodologies, semantic condensation"
        url="/methodologies"
        structuredData={structuredData}
            />
      <main className="meth-methodologies-overview" role="main" aria-labelledby="methodologies-hero-title">
        <Breadcrumb />
        {/* Hero Section */}
        <section className="meth-methodologies-hero" aria-labelledby="methodologies-hero-title">
        <div className="meth-waves-container" aria-hidden="true">
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
        <div className="meth-hero-content">
          <h1 className="meth-hero-title" id="methodologies-hero-title">
            Methodologies: The Operating Logic Beneath the Governance Layer
          </h1>
          <p className="meth-hero-subtitle">
            The operating logic beneath the governance layer.
          </p>
          <div className="meth-hero-cta">
            <a href="#contact" className="meth-btn" aria-label="Get started with our methodologies">
              Get Started
              <ArrowRight size={18} className="ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className="meth-container">
        {/* Intro Text */}
        <section className="meth-section">
          <div className="meth-content-section">
            <h2 className="meth-intro-title">
              What Is a <span className="gradient-text">Methodology</span> at FERZ?
            </h2>
            <p className="meth-intro-text">
              A FERZ methodology is a domain-independent, formally defined system for structuring thought or content, 
              transforming unstructured input into governed form, embedding compliance, traceability, or auditability, 
              and scaling cognition across teams, systems, and AI models.
            </p>
            <p className="meth-intro-text">
              They are often implemented upstream of our product stack—feeding LASO(f), LASO(f)-AG, or Tsutka with 
              structured, aligned, and cognitively coherent inputs. Think of methodologies as cognitive governance layers, 
              composable across applications.
            </p>
            <div className="meth-intro-divider"></div>
          </div>
        </section>

        {/* Why Methodologies Matter Section */}
        <section className="meth-section" id="why-matter">
          <h2 className="meth-section-title">Why Methodologies Matter</h2>
          <p className="meth-section-subtitle">
            Without structure, there is no governance. Without governance, AI is guesswork.
          </p>
          
          <div className="meth-why-matter">
            {whyMatter.map((item) => (
              <div key={item.id} className="meth-why-item">
                <h3>
                  {item.icon}
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Available Methodologies Section */}
        <section className="meth-section" id="methodologies">
          <h2 className="meth-section-title">Available Methodologies</h2>
          <p className="meth-section-subtitle">
            They turn knowledge into infrastructure. They make thought governable.
          </p>
          
          <div className="meth-methodology-list">
            {methodologies.map((methodology) => (
              <div key={methodology.id} className="meth-methodology-item">
                <div className="meth-methodology-header">
                  <span className="meth-methodology-number">0{methodology.id}</span>
                  <div>
                    <h3 className="meth-methodology-name">{methodology.name}</h3>
                    <p className="meth-methodology-fullname">{methodology.fullName}</p>
                  </div>
                </div>
                <p className="meth-methodology-description">{methodology.description}</p>
                <ul className="meth-feature-list">
                  {methodology.features.map((feature, index) => (
                    <li key={index} className="meth-feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="meth-section" id="principles">
          <h2 className="meth-section-title">Core Principles</h2>
          <p className="meth-section-subtitle">
            Our methodologies are built on fundamental principles that ensure reliability and scalability.
          </p>
          
          <div className="meth-principles">
            {principles.map((principle) => (
              <div key={principle.id} className="meth-principle">
                <div className="meth-principle-icon">
                  {principle.icon}
                </div>
                <div className="meth-principle-content">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodologies + Products Section */}
        <section className="meth-section" id="integration">
          <h2 className="meth-section-title">Methodologies + Products</h2>
          <p className="meth-section-subtitle">
            Each methodology in the FERZ stack is designed to complement product implementations.
          </p>
          
          <div className="meth-integration-table">
            <div className="meth-table-header">
              <h3>Methodology</h3>
              <h3>Feeds Into</h3>
              <h3>Purpose</h3>
            </div>
            {integrations.map((integration) => (
              <div key={integration.id} className="meth-table-row">
                <div className="meth-table-cell">
                  <div className="meth-methodology-badge">
                    {integration.icon}
                    {integration.methodology}
                  </div>
                </div>
                <div className="meth-table-cell">{integration.feedsInto}</div>
                <div className="meth-table-cell">{integration.purpose}</div>
              </div>
            ))}
          </div>
          <p className="meth-integration-note">
            Together, they form the thinking substrate behind the FERZ governance stack.
          </p>
        </section>
      </div>
      </main>
    </>
  );
};

export default MethodologiesPage; 