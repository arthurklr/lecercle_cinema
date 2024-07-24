import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty('--num', items.length);
  }, [items]);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-wrapper module-wrapper">
      <Splide
        options={{
          perPage: 2,
          perMove: 1,
          height: '100%',
          width: '100%',
          autoplay: true,
          focus: 'center',
          trimSpace: false,
          rewind: true,
          breakpoints: {
            600: {
              perPage: 2,
              height: '6rem',
            },
          },
        }}
        aria-label="Films Carousel"
      >
        {items.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/titre?=${encodeURIComponent(movie.title)}`}>
              <img src={movie.picture.big} alt={movie.title} className="carousel-poster-img" />
            </Link>
            <div className="carousel-caption">{movie.title}</div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
