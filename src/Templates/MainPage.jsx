import { useEffect, useState } from "react";
import ProductCard from "../Molecules/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingItems } from "../Redux/Slices/ShoppingItemsSlice";
import Container from "./MainPageStyle";
import Header from "./Header";
import ProductDetailsCard from "../Molecules/ProductDetailsCard";
import ProductSlideshow from "../Molecules/ProductSlideShow";
const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ShoppingItems());
  }, [dispatch]);
  const Items = useSelector((state) => state.Items);

  const [productData, setProductData] = useState({});
  const setData = (data) => {
    console.log(data.id);
    setProductData(data);
  };

  return (
    <Container>
      <Header />
      {Items.apiStatus === "succeeded" && (
        <>
          {productData.id ? (
            <ProductDetailsCard product={productData} />
          ) : (
            <>
              <ProductSlideshow Item={Items} />
              <ProductCard Item={Items} dataSend={setData} />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default MainPage;
