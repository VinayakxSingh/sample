// Article loader utility
// This utility dynamically loads articles from the public/articles folder structure

export const loadArticles = async () => {
  try {
    // In a real implementation, this would dynamically scan the public/articles folder
    // For now, we'll simulate dynamic loading by defining the article structure
    const articleIds = ['article-1', 'article-2', 'article-3'];
    const articles = [];

    for (const articleId of articleIds) {
      try {
        // Simulate fetching metadata from public/articles/{articleId}/metadata.json
        const metadata = await fetch(`/articles/${articleId}/metadata.json`);
        if (metadata.ok) {
          const articleData = await metadata.json();
          // Add the image path
          articleData.image = `/articles/${articleId}/${articleData.image}`;
          articles.push(articleData);
        }
      } catch (error) {
        console.warn(`Could not load metadata for ${articleId}:`, error);
      }
    }

    // Fallback to static data if dynamic loading fails
    if (articles.length === 0) {
      console.warn('Dynamic loading failed, using fallback data');
      return getFallbackArticles();
    }

    return articles;
  } catch (error) {
    console.error('Error loading articles:', error);
    return getFallbackArticles();
  }
};

// Fallback static data for when dynamic loading fails
const getFallbackArticles = () => [
  {
    id: 'article-1',
    title: 'AI Governance Best Practices',
    description: 'Essential frameworks for deterministic AI systems in regulated environments',
    author: 'Edward Meyman',
    date: '2025-01-15',
    category: 'AI Governance',
    tags: ['AI', 'Governance', 'Safety', 'Compliance'],
    featured: true,
    readTime: '5 min read',
    image: '/articles/article-1/image.jpg',
    slug: 'ai-governance-best-practices',
    content: null
  },
  {
    id: 'article-2',
    title: 'Deterministic AI Systems',
    description: 'Building reliable and predictable AI systems for critical applications',
    author: 'Edward Meyman',
    date: '2025-01-20',
    category: 'AI Development',
    tags: ['AI', 'Deterministic', 'Reliability', 'Machine Learning'],
    featured: true,
    readTime: '7 min read',
    image: '/articles/article-2/image.jpg',
    slug: 'deterministic-ai-systems',
    content: null
  },
  {
    id: 'article-3',
    title: 'Ethical AI Implementation',
    description: 'Ensuring ethical considerations in AI system development and deployment',
    author: 'Edward Meyman',
    date: '2025-01-25',
    category: 'AI Ethics',
    tags: ['AI', 'Ethics', 'Responsibility', 'Bias', 'Fairness'],
    featured: true,
    readTime: '6 min read',
    image: '/articles/article-3/image.jpg',
    slug: 'ethical-ai-implementation',
    content: null
  }
];

export const loadArticleContent = async (articleId) => {
  try {
    // Try to fetch the actual markdown file from public/articles/{articleId}/article-data.md
    const response = await fetch(`/articles/${articleId}/article-data.md`);
    if (response.ok) {
      const content = await response.text();
      return content;
    }
  } catch (error) {
    console.warn(`Could not load markdown for ${articleId}:`, error);
  }

  // Fallback to static content if dynamic loading fails
  const fallbackContent = {
    'article-1': `# AI Governance Best Practices

## Introduction

In today's rapidly evolving AI landscape, establishing robust governance frameworks is not just a best practice—it's a necessity. As AI systems become more sophisticated and integrated into critical decision-making processes, the need for deterministic, reliable, and ethical AI governance has never been more pressing.

## Key Principles of AI Governance

### 1. Deterministic Outputs
AI systems must produce consistent, predictable results. This means:
- Eliminating random variations in outputs
- Ensuring reproducibility across different environments
- Maintaining consistency in decision-making processes

### 2. Ethical Frameworks
Every AI system should be built with ethical considerations at its core:
- Fairness and bias mitigation
- Transparency in decision-making
- Accountability for system outcomes
- Privacy protection and data security

### 3. Risk Assessment
Comprehensive risk assessment is essential:
- Identify potential failure modes
- Assess impact on stakeholders
- Implement mitigation strategies
- Regular monitoring and evaluation

## Implementation Strategies

### Regulatory Compliance
- Stay updated with evolving regulations
- Implement compliance monitoring systems
- Regular audits and assessments
- Documentation and reporting

### Technical Safeguards
- Input validation and sanitization
- Output verification mechanisms
- Fallback systems and redundancy
- Continuous monitoring and alerting

## Conclusion

Effective AI governance requires a holistic approach that combines technical excellence with ethical responsibility. By implementing these best practices, organizations can build AI systems that are not only powerful but also trustworthy and reliable.

The future of AI depends on our ability to govern these systems effectively, ensuring they serve humanity's best interests while minimizing potential risks.`,

    'article-2': `# Deterministic AI Systems

## Introduction

The quest for deterministic AI systems represents a fundamental shift in how we approach artificial intelligence. While traditional AI systems rely on probabilistic outputs, deterministic AI systems provide consistent, predictable results that are essential for critical applications in healthcare, finance, and autonomous systems.

## What Makes AI Systems Deterministic?

### 1. Consistent Input Processing
Deterministic AI systems process inputs in a predictable manner:
- Same input always produces the same output
- No random variations or stochastic elements
- Reproducible results across different environments

### 2. Controlled Randomness
When randomness is necessary, it's carefully managed:
- Seeded random number generators
- Deterministic algorithms for uncertainty
- Controlled exploration in learning processes

### 3. State Management
Proper state management ensures consistency:
- Immutable data structures where possible
- Clear state transitions
- Predictable memory usage patterns

## Building Deterministic AI Systems

### Architecture Design
- Modular system design
- Clear separation of concerns
- Predictable data flow patterns
- Robust error handling

### Testing and Validation
- Comprehensive test suites
- Deterministic test environments
- Automated validation pipelines
- Performance benchmarking

## Conclusion

Deterministic AI systems represent the future of reliable artificial intelligence. By prioritizing consistency and predictability, we can build AI systems that are not only powerful but also trustworthy and dependable.`,

    'article-3': `# Ethical AI Implementation

## Introduction

As artificial intelligence becomes increasingly integrated into our daily lives, the importance of ethical AI implementation cannot be overstated. Ethical AI goes beyond technical excellence—it encompasses fairness, transparency, accountability, and responsibility in every aspect of AI system development and deployment.

## Core Principles of Ethical AI

### 1. Fairness and Bias Mitigation
AI systems must be designed to treat all individuals fairly:
- Identify and eliminate algorithmic bias
- Ensure diverse representation in training data
- Regular bias audits and assessments
- Inclusive design principles

### 2. Transparency and Explainability
AI decisions should be understandable and explainable:
- Clear documentation of decision-making processes
- Interpretable model outputs
- User-friendly explanations
- Open communication about system capabilities and limitations

### 3. Privacy and Data Protection
Respect for user privacy is paramount:
- Data minimization principles
- Secure data handling practices
- User consent and control
- Compliance with privacy regulations

## Implementation Framework

### Design Phase
- Ethical impact assessments
- Stakeholder consultation
- Risk identification and mitigation
- Compliance planning

### Development Phase
- Ethical coding practices
- Bias testing and validation
- Security and privacy by design
- Documentation and transparency

## Conclusion

Ethical AI implementation is not a one-time effort but an ongoing commitment to responsible innovation. By embedding ethical considerations into every stage of AI development, we can create systems that not only perform well but also serve the best interests of society.`
  };

  return fallbackContent[articleId] || `# Article Content for ${articleId}
  
This is the full article content that would be loaded from the markdown file.`;
};

export const getFeaturedArticles = async () => {
  const articles = await loadArticles();
  return articles.filter(article => article.featured);
};

export const getArticlesByCategory = async (category) => {
  const articles = await loadArticles();
  return articles.filter(article => article.category === category);
}; 