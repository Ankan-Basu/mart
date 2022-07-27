import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Product from './Product';

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem 2rem;
  justify-content: center;
`;

const ProductsList = () => {  
  let pdtArray = useSelector(state => state.allProducts.products);
  return (
    <ProductsContainer>
    {pdtArray.map((pdt) => {
      return (
      <Product pdt={pdt} key={pdt.id}/>
      )
    })}
    </ProductsContainer>
  )
}

export default ProductsList