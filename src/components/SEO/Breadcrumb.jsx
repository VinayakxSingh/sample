import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = ({ items = [] }) => {
  const location = useLocation();
  
  // Generate breadcrumbs based on current path if no items provided
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [
      { name: 'Home', path: '/', icon: <Home size={16} /> }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name,
        path: currentPath,
        isLast: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ferz.ai${item.path}`
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {item.isLast ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="breadcrumb-link">
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  {item.name}
                  <ChevronRight size={16} className="breadcrumb-separator" />
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb; 