import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductContainer = styled.div`
  width: 300px;
  height: 600px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border: 1px solid gray;
  border-radius: 0.25rem;
`;

const ImgContainer = styled.div`
  display: flex;
  align-tems: center;
  justify-content: center;
  background-color: white;
`;

const TextContainer = styled.div`
  ${'' /* border 2px solid purple; */}
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const Img = styled.img`
  height: 200px;
  width: 200px;
  ${'' /* border: 2px solid green; */}
`;

const Details = styled.div`
  ${'' /* border: 2px solid orange; */}
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 28px;
`;

const Desc = styled.div``;

const Rating = styled.div``;

const Rate = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const Count = styled.span`
  font-size: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  justify-self: flex-end;
  font-size 18px;
  padding: 0.25rem;
`;

const Product = ({pdt}) => {
  // let pdt = {
  //   "id": 1,
  //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   "price": 109.95,
  //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   "category": "men's clothing",
  //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   "rating": {
  //     "rate": 3.9,
  //     "count": 120
  //   }};

  return (
    <ProductContainer>
    <ImgContainer>
    <Img src={pdt.image} />
    </ImgContainer>
    <TextContainer>
    <Details>
    <Title>{pdt.title}</Title>
    <Price>${pdt.price}</Price>
    {/* <Desc>{pdt.description}</Desc> */}
    <p>{pdt.category}</p>
    <Rating>
    <Rate>{pdt.rating.rate} </Rate> 
    <Count>({pdt.rating.count} ratings)</Count>
    </Rating>
    </Details>
    <Button><ShoppingCartOutlinedIcon />Add to Cart</Button>
    </TextContainer>
    </ProductContainer>
  )
}

export default Product