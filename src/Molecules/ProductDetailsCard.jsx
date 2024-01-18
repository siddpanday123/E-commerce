
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { CardContainer, Image, InfoSection } from './ProductDetailsCardStyle';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetailsCard = ({ product }) => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    title,
  } = product;

  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CardContainer>
    
      <div style={{width:"40%",padding:"30px",}}>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index}`} />
        ))}
      </Slider>
      </div>
      
     <div style={{width:"50%"}}>
     <InfoSection>
        <strong>Name:</strong> {title}
      </InfoSection>
     <InfoSection>
        <strong>Brand:</strong> {brand}
      </InfoSection>
      <InfoSection>
        <strong>Category:</strong> {category}
      </InfoSection>
      <InfoSection>
        <strong>Description:</strong> {description}
      </InfoSection>
      <InfoSection>
        <strong>Discount Percentage:</strong> {discountPercentage}%
      </InfoSection>
      <InfoSection>
        <strong>ID:</strong> {id}
      </InfoSection>
      <InfoSection>
        <strong>Price:</strong> ${price}
      </InfoSection>
      <InfoSection>
        <strong>Rating:</strong> {rating}
      </InfoSection>
      <InfoSection>
        <strong>Stock:</strong> {stock}
      </InfoSection>
     </div>
      
    </CardContainer>
  );
};

ProductDetailsCard.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    discountPercentage: PropTypes.number,
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    rating: PropTypes.number,
    stock: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default ProductDetailsCard;
