import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { ArrowRight, Clock, User } from "lucide-react";
import { loadArticles } from "../../../utils/articleLoader";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

const ArticlesCarousel = ({
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
  maxArticles = 6,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const allArticles = await loadArticles();
        // Limit to maxArticles and only featured ones for carousel
        const featuredArticles = allArticles
          .filter(article => article.featured)
          .slice(0, maxArticles);
        setArticles(featuredArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [maxArticles]);

  if (loading) {
    return (
      <div className="articles-carousel-loading">
        <div className="loading-spinner">Loading articles...</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="articles-carousel-empty">
        <p>No articles available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="articles-carousel-section" aria-label="Articles carousel">
      <div className="articles-carousel-outer-container">
        <div className="articles-carousel-inner-container">
          <div className="articles-carousel-info">
            <div className="info-group">
              <div className="info-text">
                <h3 className="info-title" style={{ fontFamily: 'Georgia, serif' }}>
                  Featured Articles
                </h3>
                <p className="info-subtitle" style={{ fontFamily: 'Georgia, serif' }}>
                  Explore our latest insights on AI governance and safety
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-wrapper-container">
            <div className="swiper-container" role="region" aria-label="Articles slideshow">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                a11y={{
                  enabled: true,
                  prevSlideMessage: 'Previous article',
                  nextSlideMessage: 'Next article',
                  firstSlideMessage: 'This is the first article',
                  lastSlideMessage: 'This is the last article',
                  paginationBulletMessage: 'Go to article {{index}}',
                }}
              >
                {articles.map((article, index) => (
                  <SwiperSlide key={article.id}>
                    <div className="article-card">
                      <div className="article-image-wrapper">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="article-image"
                          onError={(e) => {
                            e.target.src = '/logo.png'; // Fallback image
                          }}
                        />
                        <div className="article-overlay">
                          <div className="article-meta">
                            <span className="article-category" style={{ fontFamily: 'Georgia, serif' }}>
                              {article.category}
                            </span>
                            <span className="article-read-time" style={{ fontFamily: 'Georgia, serif' }}>
                              <Clock size={12} />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="article-content">
                        <h3 className="article-title" style={{ fontFamily: 'Georgia, serif' }}>
                          {article.title}
                        </h3>
                        <p className="article-description" style={{ fontFamily: 'Georgia, serif' }}>
                          {article.description}
                        </p>
                        <div className="article-footer">
                          <span className="article-author" style={{ fontFamily: 'Georgia, serif' }}>
                            <User size={12} />
                            {article.author}
                          </span>
                          <span className="article-date" style={{ fontFamily: 'Georgia, serif' }}>
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                        </div>
                        <Link to={`/articles/${article.slug}`} className="article-read-more" style={{ fontFamily: 'Georgia, serif' }}>
                          Read More
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                
                {showNavigation && (
                  <>
                    <div className="swiper-button-next" aria-label="Next article" />
                    <div className="swiper-button-prev" aria-label="Previous article" />
                  </>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesCarousel; 