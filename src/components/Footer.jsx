import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import colors from './colors';
import {Link} from 'react-router-dom';

const FooterContainer = styled.footer`
  display: flex;
  gap: 3.5rem;
  ${'' /* border: 2px solid green; */}
  padding: 1.5rem 1rem;;

`;

const Left = styled.div`
  ${'' /* border: 2px solid red; */}
  flex: 1;
`;

const Center = styled.div`
  ${'' /* border: 2px solid red; */}
  flex: 1;
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  gap: 0.75rem;
`;

const Right = styled.div`
  flex: 1;
  ${'' /* border: 2px solid red; */}
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Logo = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.5rem;
`;

const Para = styled.p`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-tems: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
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


const Footer = () => {
  return (
    <FooterContainer>
      <Left>
        <Logo>
          MART<span style={{color: 'red', fontWeight: '600'}}>.</span>
        </Logo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nihil natus? Saepe quas quibusdam mollitia consequuntur deserunt 
        </p>
      </Left>

      <Center>
        <h3 style={{padding:'0', margin:'0', fontWeight: '600'}}>Useful Links</h3>
        <List>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/all'>All Categories</CustomLink></li>
        <li><CustomLink to='/electronics'>Electronics</CustomLink></li>
        <li><CustomLink to='/jewelery'>Jewelery</CustomLink></li>
        <li><CustomLink to='/mens'>Men's clothing</CustomLink></li>
        <li><CustomLink to='/womens'>Women's clothing</CustomLink></li>
        <li><CustomLink to='/cart'>View Cart</CustomLink></li>
        <li><CustomLink to='/#'>Report a problem</CustomLink></li>
        </List>
      </Center>

      <Right>
        <h3 style={{fontWeight: '600'}}>Contact Us</h3>
        <Para><LocationOnIcon style={{color: colors.orange6}} /> <CustomLink to='#'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nihil natus? Saepe</CustomLink></Para>
        <Para><EmailIcon style={{color: colors.orange6}} /> <CustomLink to='#'>email@contact.com</CustomLink></Para>
        <Para><PhoneIcon style={{color: colors.orange6}} /><CustomLink to='#'>00 0000 0000</CustomLink></Para>
        <SocialLinks>
        <IconContainer color='#4267B2'>
        <FacebookIcon style={{color:"white"}} />
        </IconContainer>
        <IconContainer color='#fb3958'>
        <InstagramIcon style={{color:"white"}} />
        </IconContainer>
        <IconContainer  color='#1DA1F2'>
        <TwitterIcon style={{color:"white"}} />
        </IconContainer>
        <IconContainer color='#E60023'>
        <PinterestIcon style={{color:"white"}} />
        </IconContainer>
        </SocialLinks>
      </Right>
    </FooterContainer>
  )
}

export default Footer