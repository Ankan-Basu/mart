import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import colors from './colors';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${'' /* border: 2px solid red; */}
  padding: 0.75rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  ${'' /* filter: blur(8px);
  -webkit-filter: blur(8px); */}
`;

const Logo = styled.h2`
  flex: 1;
  z-index: 11;
  letter-spacing: 0.25rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  ${'' /* border: 2px solid green; */}
  flex: 2;
  z-index: 11;
  gap: 0.25rem;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  z-index: 11;
`;

const Button = styled.button`
  padding: 0.25rem;
  border-radius: 50%;
  border: none;
  z-index: 13;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.orange2};
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  ${'' /* width: "100%"; */}
  border-radius: 0.25rem;
  border: none;
  outline: none;
  background-color: ${colors.orange2};
  padding: 0.25rem;
`;

const SearchButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  background-color: ${colors.orange6};
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        Mart<span style={{color: 'red'}}>.</span>
      </Logo>

      <SearchBarContainer>
      {/* <form> */}
        <Input type="text" placeholder="Search"/>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
        {/* </form> */}
      </SearchBarContainer>
      <Menu>
        <Button>
          <PersonOutlinedIcon />
        </Button>
        <Button>
          <ShoppingCartOutlinedIcon />
        </Button>
      </Menu>
    </NavbarContainer>
  )
}

export default Navbar