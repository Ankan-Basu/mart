// import {useState} from 'react';
import styled from 'styled-components'
import ItemList from '../components/ItemList';
import Total from '../components/Total';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CartContainer = styled.div`
  ${'' /* border: 2px solid black; */}
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
`;

const Left = styled.div`
  ${'' /* border: 2px solid green; */}
`;

const Right = styled.div`
  ${'' /* border: 2px solid red; */}
  position: relative;
`;

const Heading = styled.h3`
  margin-bottom: 1rem;
  font-size: 24px;
  font-weight: 500;
`;

const TotalContainer = styled.div`
  position: sticky;
  ${'' /* top: 140px; */}
  top: 60px;
`;


const Cart = () => {
  

  return (
    <>
    <Navbar />
    <CartContainer>
    <Left>
    <Heading>Your Cart:</Heading>
    <ItemList />
    </Left>
    <Right>
      <TotalContainer>
      <Total />
      </TotalContainer>

    </Right>
    </CartContainer>
    <Footer />
    </>
  )
}

export default Cart