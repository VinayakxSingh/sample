import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords = '',
  image = '/logo.png',
  url = '',
  type = 'website',
  robots = 'index, follow',
  canonical = '',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@ferz_ai',
  twitterCreator = '@ferz_ai',
  structuredData = null
}) => {
  const siteTitle = 'FERZ - Formalizing Emergent Reasoning Zones';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullUrl = url ? `https://ferz.ai${url}` : 'https://ferz.ai';
  const fullImage = image.startsWith('http') ? image : `https://ferz.ai${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="FERZ" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 