import PropTypes from "prop-types";
import Container, {
  ImgWrapper,
  Wrapper,
  ImgContainer,
} from "./ProductCardStyle";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ Item, dataSend }) => {
  const navigate = useNavigate()
  const { searchQuery } = useSelector((state) => state.FilterProducts);
  console.log(searchQuery, "FilterProducts");
  const { products } = Item.data;
  console.log(products);

  const filteredProducts = products.filter((product) => {
    const productTitle = String(product.title).toLowerCase();
    const filter = String(searchQuery).toLowerCase();
    return productTitle.includes(filter);
  });

  const ProductClicked = (item) => {
    dataSend(item);
    navigate("/Product")
  };

  return (
    <Container>
      {(searchQuery.length ? filteredProducts : products).map((item, index) => (
        <Wrapper key={index} onClick={() => ProductClicked(item)}>
          <ImgContainer>
            <ImgWrapper src={item.images[0]} radius={"15px"}></ImgWrapper>
          </ImgContainer>
          {item.title}
          <div style={{ fontWeight: "700" }}>${item.price}</div>
        </Wrapper>
      ))}
      {filteredProducts.length === 0 && "Product Not Found...."}
    </Container>
  );
};

ProductCard.propTypes = {
  Item: PropTypes.object,
  dataSend: PropTypes.func, // Ensure dataSend is a function
};

export default ProductCard;
