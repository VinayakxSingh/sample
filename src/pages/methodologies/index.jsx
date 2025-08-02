import React from 'react';
import { useParams } from 'react-router-dom';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

export const MethodologyPage = () => {
  const { methodologyId } = useParams();
  
  // Methodology data mapping
  const methodologyData = {
    'ai-capsule': {
      title: 'AI Capsule',
      description: 'Our modular AI implementation methodology that enables rapid deployment and scaling of AI solutions.'
    },
    'mrcf': {
      title: 'MRCF',
      description: 'Multi-dimensional Risk and Compliance Framework for comprehensive risk assessment and management.'
    },
    'scm': {
      title: 'SCM',
      description: 'Strategic Change Management methodology to guide organizations through digital transformation.'
    }
  };

  const methodology = methodologyId ? (methodologyData[methodologyId] || {
    title: 'Methodology Not Found',
    description: 'The requested methodology could not be found.'
  }) : {
    title: 'Our Methodologies',
    description: 'Explore our proven methodologies designed to deliver exceptional results.'
  };

  return (
    <ComingSoon 
      title={methodology.title}
      subtitle={methodologyId ? 'Coming Soon' : ''}
      description={methodology.description}
    />
  );
};

export default MethodologyPage;
