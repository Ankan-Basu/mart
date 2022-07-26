import styled from 'styled-components';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import colors from './colors';
import {Link} from 'react-router-dom';

const ItemContainer = styled.div`
  border: 2px solid blue;
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  width: 700px;
  border-radius: 0.25rem;
  margin: 0 0 1rem 0;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;

  ${'' /* border: 2px solid green; */}
`;

const Desc = styled.div`
${'' /* border: 2px solid red; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${'' /* width: 460px; */}
  flex: 1;
`;

const Title = styled.h4`
  ${'' /* border: 2px solid yellow; */}
  font-weight: 500;
`;

const Options = styled.div`
  ${'' /* border: 2px solid black; */}
  display: flex;
  gap: 1rem;
`;

const Quantity = styled.div`
  ${'' /* border: 2px solid purple; */}
  display: flex;
  ${'' /* gap: 0.5rem; */}
  align-items: center;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  background-color: ${colors.orange6};
  color: white;
  align-self: stretch;
  font-weight: 500;
`;

const Input = styled.input`
  width: 3rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: none;
  background-color: ${colors.orange2};
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #d32f2f;
  color: white;
  font-weight: 500;  

`;

const Price = styled.div`
  ${'' /* border: 2px solid pink; */}
`;


const CartItem = ({pdt}) => {
    // let pdt = {
    // "id": 1,
    // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    // "price": 109.95,
    // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    // "category": "men's clothing",
    // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    // "rating": {
    //   "rate": 3.9,
    //   "count": 120
    // }};

  
  return (
    <ItemContainer>
    <Img src={pdt.image} />
    <Desc>
      <Title>
      <Link to='#'>{pdt.title}</Link>
      </Title>
      <Options>
      <Quantity>
       Qty:<span style={{padding: '0.5rem'}}></span>
        <Button>-</Button>
        <Input type="number" />
        <Button>+</Button>
        </Quantity>
        <DeleteButton><DeleteOutlineOutlinedIcon />Remove from Cart</DeleteButton>
      </Options>
    </Desc>
    <Price>
      <h4 style={{fontWeight: 500}}>
      Subtotal
      </h4>
      <div>200</div>
    </Price>

    </ItemContainer>
  )
}

export default CartItem