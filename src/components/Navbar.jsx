import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

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

const Logo = styled.div`
  flex: 1;
  z-index: 11;
`;

const SearchBarContainer = styled.div`
  display: flex;
  border: 2px solid green;
  flex: 2;
  z-index: 11;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  z-index: 11;
`;

const Button = styled.button`
  padding: 0.2rem;
  border-radius: 50%;
  border: none;
  z-index: 13;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        Mart.
      </Logo>

      <SearchBarContainer>
      {/* <form> */}
        <input type="text" placeholder="search" style={{width: "100%"}}/>
        <button>
          <SearchIcon />
        </button>
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