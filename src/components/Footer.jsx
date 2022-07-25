import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

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

const Footer = () => {
  return (
    <FooterContainer>
      <Left>
        <Logo>
          MART<span style={{color: 'red'}}>.</span>
        </Logo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nihil natus? Saepe quas quibusdam mollitia consequuntur deserunt 
        </p>
      </Left>

      <Center>
        <h3 style={{padding:'0', margin:'0'}}>Useful Links</h3>
        <List>
        <li>Home</li>
        <li>All Categories</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's clothing</li>
        <li>Women's clothing</li>
        <li>View Cart</li>
        <li>Report a problem</li>
        </List>
      </Center>

      <Right>
        <h3>Contact Us</h3>
        <Para><LocationOnIcon /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nihil natus? Saepe</Para>
        <Para><EmailIcon /> email@contact.com</Para>
        <Para><PhoneIcon />00 0000 0000</Para>
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