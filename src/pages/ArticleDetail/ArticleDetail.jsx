import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { loadArticles, loadArticleContent } from '../../utils/articleLoader';
import SEO from '../../components/SEO/SEO';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const allArticles = await loadArticles();
        const foundArticle = allArticles.find(article => article.slug === slug);
        
        if (!foundArticle) {
          setError('Article not found');
          return;
        }

        setArticle(foundArticle);
        
        // Load the markdown content
        const articleContent = await loadArticleContent(foundArticle.id);
        setContent(articleContent);
        
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="article-detail-loading">
        <div className="loading-spinner">Loading article...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-detail-error">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/articles" className="back-to-articles">
          <ArrowLeft size={16} />
          Back to Articles
        </Link>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.date,
    "publisher": {
      "@type": "Organization",
      "name": "FERZ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ferz.ai/logo.png"
      }
    },
    "image": `https://ferz.ai${article.image}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ferz.ai/articles/${article.slug}`
    }
  };

  return (
    <>
      <SEO
        title={`${article.title} - FERZ Articles`}
        description={article.description}
        keywords={article.tags.join(', ')}
        url={`/articles/${article.slug}`}
        structuredData={structuredData}
      />
      
      <main className="article-detail-page" role="main" aria-labelledby="article-title">
        {/* Hero Section */}
        <section className="article-hero">
          <div className="article-hero-background">
            <img 
              src={article.image} 
              alt={article.title}
              className="hero-background-image"
              onError={(e) => {
                e.target.src = '/logo.png';
              }}
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container">
            <div className="article-hero-content">
              <Link to="/articles" className="back-link">
                <ArrowLeft size={16} />
                Back to Articles
              </Link>
              
              <div className="article-meta-hero">
                <span className="article-category-hero" style={{ fontFamily: 'Georgia, serif' }}>
                  {article.category}
                </span>
                <span className="article-read-time-hero" style={{ fontFamily: 'Georgia, serif' }}>
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
              
              <h1 className="article-title-hero" id="article-title" style={{ fontFamily: 'Georgia, serif' }}>
                {article.title}
              </h1>
              
              <p className="article-description-hero" style={{ fontFamily: 'Georgia, serif' }}>
                {article.description}
              </p>
              
              <div className="article-author-hero">
                <span className="author-info" style={{ fontFamily: 'Georgia, serif' }}>
                  <User size={14} />
                  {article.author}
                </span>
                <span className="publish-date" style={{ fontFamily: 'Georgia, serif' }}>
                  <Calendar size={14} />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <div className="article-tags-hero">
                {article.tags.map((tag, index) => (
                  <span key={index} className="article-tag-hero" style={{ fontFamily: 'Georgia, serif' }}>
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="article-content-section">
          <div className="container">
            <article className="article-content-wrapper">
              <div className="article-content" style={{ fontFamily: 'Georgia, serif' }}>
                <div className="markdown-content">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              </div>
              
              {/* Sidebar */}
              <aside className="article-sidebar">
                <div className="sidebar-section">
                  <h3 style={{ fontFamily: 'Georgia, serif' }}>Article Info</h3>
                  <div className="sidebar-item">
                    <strong>Category:</strong> {article.category}
                  </div>
                  <div className="sidebar-item">
                    <strong>Read Time:</strong> {article.readTime}
                  </div>
                  <div className="sidebar-item">
                    <strong>Published:</strong> {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="sidebar-section">
                  <h3 style={{ fontFamily: 'Georgia, serif' }}>Tags</h3>
                  <div className="sidebar-tags">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="sidebar-tag" style={{ fontFamily: 'Georgia, serif' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default ArticleDetail; 