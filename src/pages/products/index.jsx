import React from 'react';
import { useParams } from 'react-router-dom';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

export const ProductPage = () => {
  const { productId } = useParams();
  
  // Product data mapping
  const productData = {
    'ferz-behavioral-ai-engine': {
      title: 'FERZ Behavioral AI Engine',
      description: 'Our advanced behavioral AI engine provides powerful predictive analytics and pattern recognition to drive intelligent decision-making.'
    },
    'constitutional-blockchain-architecture': {
      title: 'Constitutional Blockchain Architecture',
      description: 'A secure and transparent blockchain framework designed for enterprise-grade applications and digital transformation.'
    },
    'strata-g': {
      title: 'Strata-G',
      description: 'Comprehensive strategic governance platform that enables organizations to align their operations with business objectives.'
    },
    'delia': {
      title: 'DELIA',
      description: 'Data-driven Enterprise Learning and Intelligence Assistant - your AI-powered solution for organizational learning and knowledge management.'
    },
    'lasof': {
      title: 'LASOF',
      description: 'Legal AI Safety and Oversight Framework ensuring responsible and compliant AI implementation across your organization.'
    },
    'lasof-ag': {
      title: 'LASOF-AG',
      description: 'Advanced governance module for the LASOF framework, providing enhanced controls and monitoring capabilities.'
    }
  };

  const product = productData[productId] || {
    title: 'Product Not Found',
    description: 'The requested product could not be found.'
  };

  return (
    <ComingSoon 
      title={product.title}
      subtitle="Coming Soon"
      description={product.description}
    />
  );
};

export default ProductPage;
