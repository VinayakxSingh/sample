import React from 'react';
import { useParams } from 'react-router-dom';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

export const ServicePage = () => {
  const { serviceId } = useParams();
  
  // Service data mapping
  const serviceData = {
    'ai-consulting': {
      title: 'AI Consulting',
      description: 'Strategic AI implementation and optimization consulting to transform your business with cutting-edge artificial intelligence solutions.'
    },
    'it-innovation-modernization': {
      title: 'IT Innovation & Modernization',
      description: 'Transform your IT infrastructure with modern solutions that drive efficiency, security, and scalability.'
    },
    'strategic-advisory-services': {
      title: 'Strategic Advisory Services',
      description: 'Expert guidance and strategic planning to navigate complex business challenges and drive growth.'
    },
    'ai-enablement-strategy': {
      title: 'AI Enablement Strategy',
      description: 'Develop comprehensive AI adoption strategies tailored to your organization\'s unique needs and goals.'
    },
    'within-paradigm-improvements': {
      title: 'Within Paradigm Improvements',
      description: 'Enhance and optimize your existing processes and systems for maximum efficiency and performance.'
    },
    'ai-governance-model-design': {
      title: 'AI Governance Model Design',
      description: 'Design robust governance frameworks to ensure responsible and effective AI implementation.'
    },
    'lasof-implementation-ai-compliance': {
      title: 'LASOF Implementation & AI Compliance',
      description: 'Ensure your AI systems meet compliance standards with our LASOF framework implementation.'
    }
  };

  const service = serviceData[serviceId] || {
    title: 'Service Not Found',
    description: 'The requested service could not be found.'
  };

  return (
    <ComingSoon 
      title={service.title}
      subtitle="Coming Soon"
      description={service.description}
    />
  );
};

export default ServicePage;
