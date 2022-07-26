import styled from 'styled-components';
import { useState } from 'react';
import colors from './colors';

const TotalContainer = styled.div`
  border: 2px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.25rem;
  width: 200px;
`;

const Heading = styled.h4`
  font-weight: 500;
`;

const Val = styled.div`
  font-weight: 500;
`;

const PromoOption = styled.div`
  cursor: pointer;
`;

const PromoInputContainer = styled.div`
  ${'' /* transition: all 3s ease; */}
  display: ${(props) => {
    return props.displayInput === true ? 'flex' : 'none';
  }};
  gap: 0.5rem;
`;

const SubTotal = styled.div``;

const Discount = styled.div``;

const GrandTotal = styled.div``;

const PromoInput = styled.input`
  width: 6rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  background-color: ${colors.orange2};
  padding: 0.25rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  background-color: ${colors.orange6};
  color: white;
  font-weight: 500;
`;

const Total = () => {
  const [promoView, setPromoView] = useState(false);

  const togglePromoView = () => {
    setPromoView(!promoView);
  }
  return (
    <TotalContainer>
      <SubTotal>
        <Heading>
          SubTotal:
        </Heading>
        <Val>
          $222
        </Val>
      </SubTotal>
      <Discount>
        <Heading>
          Discount:
        </Heading>
        <Val>
          $0
        </Val>
      </Discount>
      <GrandTotal>
        <Heading>
          GrandTotal:
        </Heading>
        <Val>
          $222
        </Val>
      </GrandTotal>
      <PromoOption onClick={togglePromoView}>
        Apply Promo Code
      </PromoOption>
      <PromoInputContainer displayInput={promoView}>
        <PromoInput type="text" ></PromoInput>
        <Button>Apply</Button>
      </PromoInputContainer>
      <Button>Proceed to Checkout</Button>
    </TotalContainer>
  )
}

export default Total