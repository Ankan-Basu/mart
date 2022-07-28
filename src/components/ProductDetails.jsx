import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
import styled from 'styled-components';
import colors from './colors';
import Offers from './Offers';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeQnInCart, selectProduct, deleteFromCart } from '../redux/actions/pdtActions';
import QuantityDisplayer from './QuantityDisplayer';

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  position: relative;
  margin: 1rem 0 2rem 0;
`;

const Left = styled.div`
  ${'' /* border: 2px solid red; */}
  height: 500px;
  width: 500px;
  position: sticky;
  top: 60px;
`;

const Right = styled.div`
  ${'' /* border: 2px solid green; */}
  flex: 1;
  ${'' /* display: flex;
  flex-direction: column;
  gap: 1rem; */}
  margin: 0 2rem 0 0;
`;

const Img = styled.img`
  height: 490px;
  width: 490px;
  object-fit: contain;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  margin-bottom: 2rem;
`;

const Desc = styled.div`
  margin-bottom: 2rem;
`;

const Rating = styled.div`
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 30px;
`;

const Price = styled.h3`
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 36px;
`;

// const Quantity = styled.div`
//   ${'' /* border: 2px solid purple; */}
//   display: flex;
//   ${'' /* gap: 0.5rem; */}
//   align-items: center;
//   margin-top: 2rem;

//   display: ${props => props.included?'flex':'none'};
// `;

// const QnButton = styled.button`
//   padding: 0.25rem 0.5rem;
//   border-radius: 0.25rem;
//   border: none;
//   cursor: pointer;
//   background-color: ${colors.orange6};
//   color: white;
//   align-self: stretch;
//   font-weight: 500;
//   font-size: 18px;
// `;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  background-color: ${colors.orange6};
  color: white;
  ${'' /* align-self: stretch; */}
  font-weight: 500;
  font-size: 18px;
  margin-top: 2rem;

  display: ${props => props.included?'none':'block'};

`;


// const Input = styled.input`
//   width: 3rem;
//   align-self: stretch;
//   border-radius: 0.25rem;
//   border: none;
//   background-color: ${colors.orange2};
// `;

// const QuantityContainer =  styled(QuantityDisplayer)`
//   ${'' /* display: block; */}
//   display: ${props => props.included?'flex':'none'};
//   ${'' /* border: 2px solid green; */}
// `;

const ProductDetails = () => {
  let pdt = useSelector(state => state.product);

  const dispatch = useDispatch();
  
  const addToCartHandler = () => {
    dispatch(addToCart(pdt.id, 1));
  }

  let alreadyInCart = useSelector(state => state.cart.cart);
  let alreadyIncluded = false;
  let quantity = 0;

  alreadyInCart.forEach((product) => {
    if (product.id === pdt.id) {
      alreadyIncluded = true;
      quantity = product.quantity;
    }
    return;
  })

  // const increaseQuantity = () => {
  //   dispatch(changeQnInCart(pdt.id, quantity+1));
  // }

  // const decreaseQuantity = () => {
  //   if (quantity === 1) {
  //     dispatch(deleteFromCart(pdt.id));
  //   } else {
  //     dispatch(changeQnInCart(pdt.id, quantity-1));
  //   }
  // }
 
  return (
    <Container>
      <Left>
        <Img src={pdt.image} />
      </Left>
      <Right>
        <Title>
          {pdt.title}
        </Title>
        <Desc>
          {pdt.description}

        </Desc>
        <Rating>
          <span style={{ fontSize: '18px' }}>
            Rating:<br />
          </span>
          {pdt.rating.rate}
          <span style={{ fontSize: '18px' }}> ({pdt.rating.count} ratings)</span>
        </Rating>
        <Price>
          <span style={{ fontSize: '18px' }}>Price:<br /></span>
          ${pdt.price}
        </Price>
        <Offers />
        <Button onClick={addToCartHandler} included={alreadyIncluded}>Add to Cart</Button>
        {/* <Quantity included={alreadyIncluded}>
          Qty:<span style={{ padding: '0.5rem' }}></span>
          <QnButton onClick={decreaseQuantity}>-</QnButton>
          <Input type="number" value={1} />
          <div>{quantity}</div>
          <QnButton onClick={increaseQuantity}>+</QnButton>
        </Quantity> */}
        <QuantityDisplayer pdt={pdt} />
      </Right>
    </Container>
  )
}

export default ProductDetails