import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { SparklesIcon } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css"; // Link to the new CSS file

// A simple Badge component with normal CSS classes
const Badge = ({ children, className, ...props }) => {
  return (
    <div
      className={`badge ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  return (
    <section className="card-carousel-section" aria-label="Image carousel">
      <div className="card-carousel-outer-container">
        <div className="card-carousel-inner-container">
          {/* <Badge className="badge-position">
            <SparklesIcon className="badge-icon" />{" "}
         
          </Badge> */}
          <div className="card-carousel-info">
            <div className="info-group">
              <div className="info-text">
                {/* <h3 className="info-title">
                  Card Carousel
                </h3> */}
                {/* <p className="info-subtitle">Seamless Images carousel animation.</p> */}
              </div>
            </div>
          </div>

          <div className="swiper-wrapper-container">
            <div className="swiper-container" role="region" aria-label="Image slideshow">
              <Swiper
                spaceBetween={50}
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
                  prevSlideMessage: 'Previous image',
                  nextSlideMessage: 'Next image',
                  firstSlideMessage: 'This is the first image',
                  lastSlideMessage: 'This is the last image',
                  paginationBulletMessage: 'Go to image {{index}}',
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-image-wrapper">
                      <img
                        src={image.src}
                        width={500}
                        height={500}
                        className="swiper-image"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={`duplicate-${index}`}>
                    <div className="swiper-image-wrapper">
                      <img
                        src={image.src}
                        width={200}
                        height={200}
                        className="swiper-image"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {showNavigation && (
                  <>
                    <div className="swiper-button-next" aria-label="Next image" />
                    <div className="swiper-button-prev" aria-label="Previous image" />
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

export default CardCarousel;
