import styled from 'styled-components';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearDisplayInCart, displayInCart } from '../redux/actions/pdtActions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10 rem;
`;

const ItemList = () => {

  const dispatch = useDispatch();
  let arr = useSelector(state => state.cart.cart);

  useEffect(() => {
    arr.forEach(async (pdt) => {
      let URL = `https://fakestoreapi.com/products/${pdt.id}`;
      // console.log(URL);
      let resp = await fetch(URL);
      let data = await resp.json();
      dispatch(displayInCart(data));
    });

    return () => {
      dispatch(clearDisplayInCart());
    }
  }, [arr])

  let pdtArray = useSelector(state => state.cartDisplay.tempCart);

  // let arr = useSelector(state => state.cart);
  // console.log(arr);
  return (
    <Container>
    {pdtArray.map((pdt) => {
      return <CartItem pdt={pdt}/>
    })}
    
    </Container>
  )
}

export default ItemList