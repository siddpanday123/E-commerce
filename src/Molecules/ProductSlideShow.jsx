import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import StyledComponent, { Image } from './ProductSlideShowStyle';

const ProductSlideshow = ({ Item }) => {
  const { products } = Item.data;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: calculateSlidesToShow(),
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  function calculateSlidesToShow() {
    const containerWidth = window.innerWidth;
    const minProductWidth = 200;
    const maxSlides = Math.floor(containerWidth / minProductWidth);
    return Math.min(7, maxSlides);
  }

  const limitedProducts = products.slice(0, 20);

  return (
    <StyledComponent style={{ width: '100%' }}>
      <h2 style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}> Product With Max-Offers </h2>
      <Slider {...sliderSettings}>
        {limitedProducts.map((product) => (
          <div key={product.id} style={{gap:"20px"}}>
            <Image
              src={product.images[0]}
              alt={product.title}
              style={{ width: '100%', height: '150px' }}
            />
          </div>
        ))}
      </Slider>
    </StyledComponent>
  );
};

ProductSlideshow.propTypes = {
  Item: PropTypes.shape({
    data: PropTypes.shape({
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          images: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    }),
  }),
};

export default ProductSlideshow;
