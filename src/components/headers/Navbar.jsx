import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { sitemapData } from './sitemapData';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setSelectedCategory(null);
    setSearchQuery('');
  };

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleLinkClick = (path, e) => {
    // Only prevent default for external links or special cases
    if (!path.startsWith('http') && !path.startsWith('mailto') && !path.startsWith('tel')) {
      e.preventDefault();
      navigate(path);
    }
    closeMenu();
  };

  const getFilteredItems = () => {
    if (!searchQuery.trim()) return null;

    const allItems = [
      ...sitemapData.companyPages,
      ...sitemapData.mainCategories,
      ...sitemapData.mainCategories.flatMap(cat => cat.subcategories)
    ];

    return allItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems();

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <button
            onClick={toggleMenu}
            className="menu-button"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          <div className="logo-container">
            <Link 
              to="/" 
              className="logo"
              onClick={closeMenu}
            >
              FERZ
            </Link>
          </div>

          <button 
            className="contact-button"
            onClick={(e) => handleLinkClick('/contact-us', e)}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      {isMenuOpen && (
        <div className="overlay-menu">
          <div className="overlay-header">
            <button
              onClick={closeMenu}
              className="close-button"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="overlay-logo-container">
              <Link 
                to="/" 
                className="overlay-logo"
                onClick={closeMenu}
              >
                FERZ
              </Link>
            </div>

            <form onSubmit={handleSearchSubmit} className="search-container">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>

            <button 
              className="overlay-contact-button"
              onClick={(e) => handleLinkClick('/contact-us', e)}
            >
              Contact Us
            </button>
          </div>

          <div className="menu-content">
            <div className="sidebar">
              <div className="sidebar-content">
                <h2 className="sidebar-title">Services</h2>
                <nav className="nav-section">
                  {sitemapData.mainCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`nav-link ${selectedCategory?.id === category.id ? 'nav-link-active' : ''}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>

                <h2 className="sidebar-title sidebar-title-secondary">Company</h2>
                <nav className="nav-section">
                  {sitemapData.companyPages.filter(page => page.id !== 'home').map((page) => (
                    <Link
                      key={page.id}
                      to={page.path}
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      {page.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="content-area">
              {searchQuery.trim() && filteredItems ? (
                <div className="search-results">
                  <div className="search-results-header">
                    <h2 className="search-results-title">
                      Search Results for "{searchQuery}"
                    </h2>
                    <p className="search-results-count">
                      {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="search-results-grid">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="search-result-card">
                        <Link 
                          to={item.path}
                          className="search-result-link"
                          onClick={closeMenu}
                        >
                          <h3 className="search-result-title">{item.title}</h3>
                          <p className="search-result-description">{item.description}</p>
                          <div className="visit-page-button">
                            Visit Page
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedCategory ? (
                <div className="category-content">
                  <div className="category-header">
                    <h2 className="category-title">{selectedCategory.title}</h2>
                    <p className="category-description">{selectedCategory.description}</p>
                  </div>
                  
                  <div className="subcategories-grid">
                    {selectedCategory.subcategories.map((subcategory) => (
                      <div key={subcategory.id} className="subcategory-card">
                        <Link 
                          to={subcategory.path}
                          className="subcategory-link"
                          onClick={closeMenu}
                        >
                          <h3 className="subcategory-title">{subcategory.title}</h3>
                          <p className="subcategory-description">{subcategory.description}</p>
                          <div className="visit-page-button">
                            Visit Page
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="placeholder-content">
                  <div className="placeholder-text">
                    Select a category or search
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

