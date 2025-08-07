import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, Search, Filter } from 'lucide-react';
import { loadArticles } from '../../utils/articleLoader';
import SEO from '../../components/SEO/SEO';
import './Articles.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const allArticles = await loadArticles();
        setArticles(allArticles);
        setFilteredArticles(allArticles);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(allArticles.map(article => article.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    setFilteredArticles(filtered);
  }, [articles, searchTerm, selectedCategory]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "FERZ Articles",
    "description": "Latest insights on AI governance, safety, and deterministic systems",
    "url": "https://ferz.ai/articles",
    "publisher": {
      "@type": "Organization",
      "name": "FERZ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ferz.ai/logo.png"
      }
    }
  };

  if (loading) {
    return (
      <div className="articles-loading">
        <div className="loading-spinner">Loading articles...</div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Articles - AI Governance & Safety Insights"
        description="Explore our latest articles on AI governance, deterministic systems, and ethical AI implementation."
        keywords="AI articles, AI governance, deterministic AI, ethical AI, AI safety, machine learning"
        url="/articles"
        structuredData={structuredData}
      />
      
      <main className="articles-page" role="main" aria-labelledby="articles-title">
        <div className="articles-header">
          <div className="container">
            <h1 className="articles-title" id="articles-title" style={{ fontFamily: 'Georgia, serif' }}>
              Articles & Insights
            </h1>
            <p className="articles-subtitle" style={{ fontFamily: 'Georgia, serif' }}>
              Explore our latest thoughts on AI governance, safety, and deterministic systems
            </p>
          </div>
        </div>

        <div className="articles-content">
          <div className="container">
            {/* Search and Filter Section */}
            <div className="articles-filters">
              <div className="search-box">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  style={{ fontFamily: 'Georgia, serif' }}
                />
              </div>
              
              <div className="category-filter">
                <Filter size={20} className="filter-icon" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="category-select"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="results-count" style={{ fontFamily: 'Georgia, serif' }}>
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </div>

            {/* Articles Grid */}
            {filteredArticles.length === 0 ? (
              <div className="no-results">
                <p style={{ fontFamily: 'Georgia, serif' }}>No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="articles-grid">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="article-card">
                    <div className="article-image-wrapper">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="article-image"
                        onError={(e) => {
                          e.target.src = '/logo.png';
                        }}
                      />
                      {article.featured && (
                        <div className="featured-badge">Featured</div>
                      )}
                    </div>
                    
                    <div className="article-content">
                      <div className="article-meta">
                        <span className="article-category" style={{ fontFamily: 'Georgia, serif' }}>
                          {article.category}
                        </span>
                        <span className="article-read-time" style={{ fontFamily: 'Georgia, serif' }}>
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h2 className="article-title" style={{ fontFamily: 'Georgia, serif' }}>
                        <Link to={`/article/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>
                      
                      <p className="article-description" style={{ fontFamily: 'Georgia, serif' }}>
                        {article.description}
                      </p>
                      
                      <div className="article-tags">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="article-tag" style={{ fontFamily: 'Georgia, serif' }}>
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="article-footer">
                        <span className="article-author" style={{ fontFamily: 'Georgia, serif' }}>
                          <User size={12} />
                          {article.author}
                        </span>
                        <span className="article-date" style={{ fontFamily: 'Georgia, serif' }}>
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                                             <Link to={`/articles/${article.slug}`} className="read-more-link">
                         Read Full Article
                       </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Articles; 