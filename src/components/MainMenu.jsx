import styled from 'styled-components';
import colors from './colors';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  padding: 4rem 0;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin: 1rem 0 2rem 1.5rem;
`;

const Button = styled.button`
  border: 2px solid ${colors.orange6};
  border-radius: 0.25rem;
  background-color: white;
  font-size: 18px;
  font-weight: 500;
  width: 10em;
  padding: 0.5rem 0;

  &:hover{
    background-color: ${colors.orange6};
    color: white;
  }
  &:active{
    background-color: ${colors.orange8};
    border-color: ${colors.orange8}
    color: white;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
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

const MainMenu = () => {
  return (
    <MenuContainer>
      <Heading>Browse Categories:</Heading>
      <ButtonsContainer>
        <CustomLink to='/all'><Button>All Categories</Button></CustomLink>
        <CustomLink to='/electronics'><Button>Electronics</Button></CustomLink>
        <CustomLink to='/jewelery'><Button>Jewelery</Button></CustomLink>
        <CustomLink to='/mens'><Button>Men's clothing</Button></CustomLink>
        <CustomLink to='/womens'><Button>Women's clothing</Button></CustomLink>
      </ButtonsContainer>
    </MenuContainer>
  )
}

export default MainMenu