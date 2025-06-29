import Product from "../Product/Product";
import products from "../../data.js";
import styled from "styled-components";


const SectionTitle = styled.h2`
  margin: 20px;
  text-align: center;
  color: rgb(39, 39, 103);
`;

const CategoryRow = styled.div`
  display: flex;

  overflow-x: auto;
  gap: 20px;
  padding: 0 20px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    overflow-x: hidden;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;        
    overflow-x: hidden;     
    justify-content: center;
  }

`;

const Wrapper = styled.div`
  margin-top: 20px ;
`;

const ProductList = () => {
  return (
    <Wrapper>
      <SectionTitle id="electronics">Electronics</SectionTitle>
      <CategoryRow>
        {products.electronics.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </CategoryRow>

      <SectionTitle id="clothing">Clothes</SectionTitle>
      <CategoryRow>
        {products.clothes.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </CategoryRow>

      <SectionTitle id="footwear">Footwear</SectionTitle>
      <CategoryRow>
        {products.shoes.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </CategoryRow>
    </Wrapper>
  );
};

export default ProductList;
