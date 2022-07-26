import styled from 'styled-components';
import colors from './colors';
import Offers from './Offers';

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

const Quantity = styled.div`
  ${'' /* border: 2px solid purple; */}
  display: flex;
  ${'' /* gap: 0.5rem; */}
  align-items: center;
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

`;


const Input = styled.input`
  width: 3rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: none;
  background-color: ${colors.orange2};
`;

const ProductDetails = () => {
  let pdt = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  };

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
        <Button>Add to Cart</Button>
        <Quantity>
          Qty:<span style={{ padding: '0.5rem' }}></span>
          <QnButton>-</QnButton>
          <Input type="number" />
          <QnButton>+</QnButton>
        </Quantity>
      </Right>
    </Container>
  )
}

export default ProductDetails