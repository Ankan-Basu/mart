import styled from 'styled-components';
import colors from './colors';
import { useDispatch, useSelector } from 'react-redux';
import { changeQnInCart, deleteFromCart } from '../redux/actions/pdtActions';

const Quantity = styled.div`
  ${'' /* border: 2px solid purple; */}
  display: flex;
  ${'' /* gap: 0.5rem; */}
  align-items: center;

  display: ${props => props.included?'flex':'none'};
`;

const QnButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  background-color: ${colors.orange6};
  color: white;
  align-self: stretch;
  font-weight: 500;
  font-size: 18px;
`;

const Input = styled.input`
  width: 3rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: none;
  background-color: ${colors.orange2};
`;

const QuantityDisplayer = ({pdt}) => {
  // let quantity = 1;

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

  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(changeQnInCart(pdt.id, quantity+1));
  }

  const decreaseQuantity = () => {
    if (quantity === 1) {
      dispatch(deleteFromCart(pdt.id));
    } else {
      dispatch(changeQnInCart(pdt.id, quantity-1));
    }
  }

  return (
      <Quantity included={alreadyIncluded}>
          Qty:<span style={{ padding: '0.5rem' }}></span>
          <QnButton onClick={decreaseQuantity}>-</QnButton>
          <Input type="number" value={1} />
          <div>{quantity}</div>
          <QnButton onClick={increaseQuantity}>+</QnButton>
        </Quantity>
  )
}

export default QuantityDisplayer