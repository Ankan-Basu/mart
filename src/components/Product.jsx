import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import colors from './colors';
import {Link, useNavigate} from 'react-router-dom';
import {linkStyle} from './style';
// import colors from './colors';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../redux/actions/pdtActions';

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
  font-weight: 500;


  border-radius: 0.25rem;
  ${'' /* border: none; */}
  border: 2px solid ${colors.orange6};

  cursor: pointer;
  background-color: ${colors.orange6};
  color: white;

  &:hover {
    background-color: ${colors.orange8};
  }

  display: ${(props) => props.included?'none':'flex'};
`;

const AltButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  justify-self: flex-end;
  font-size 18px;
  padding: 0.25rem;
  font-weight: 500;

  border-radius: 0.25rem;
  border: none;
  border: 2px solid ${colors.orange6};
  cursor: pointer;
  background-color: white; 
  color: ${colors.orange6};

  &: hover {
    background-color: ${colors.orange6}; 
    color: white;
  }

  display: ${(props) => props.included?'flex':'none'};
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover{
    color: ${colors.orange6};
  }
  &:active {
    color: ${colors.orange8};
  }
`;

const Product = ({pdt}) => {
  
  const dispatch = useDispatch();
  
  const addToCartHandler = () => {
    dispatch(addToCart(pdt.id, 1));
  }

  let alreadyInCart = useSelector(state => state.cart.cart);
  let alreadyIncluded = false;
  alreadyInCart.forEach((product) => {
    if (product.id === pdt.id) {
      alreadyIncluded = true;
    }
    return;
  })

  let navigate = useNavigate();
  const goToCart = () => {
    return navigate('/cart');
  }

  return (
    <ProductContainer>
    <ImgContainer>
    <Img src={pdt.image} />
    </ImgContainer>
    <TextContainer>
    <Details>
    <Title><CustomLink to={`/products/${pdt.id}`}>{pdt.title}</CustomLink></Title>
    <Price>${pdt.price}</Price>
    <p><CustomLink to=''>{pdt.category}</CustomLink></p>
    <Rating>
    <Rate>{pdt.rating.rate} </Rate> 
    <Count>({pdt.rating.count} ratings)</Count>
    </Rating>
    </Details>
    <Button onClick={addToCartHandler} included={alreadyIncluded}><ShoppingCartOutlinedIcon />Add to Cart</Button>
    {/* <Link to='/cart'> */}
    <AltButton onClick={goToCart} included={alreadyIncluded}><ShoppingCartOutlinedIcon />View Cart</AltButton>
    {/* </Link> */}
    </TextContainer>
    </ProductContainer>
  )
}

export default Product