// import {useState} from 'react';
import styled from 'styled-components'
import ItemList from '../components/ItemList';
import Total from '../components/Total';

const CartContainer = styled.div`
  border: 2px solid black;
  display: flex;
`;

const Left = styled.div`
  border: 2px solid green;
`;

const Right = styled.div`
  border: 2px solid red;
`;


const Cart = () => {
  

  return (
    <CartContainer>
    <Left><ItemList /></Left>
    <Right>

      <Total />

    </Right>
    </CartContainer>
  )
}

export default Cart