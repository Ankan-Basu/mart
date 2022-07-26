import SellIcon from '@mui/icons-material/Sell';
import styled from 'styled-components';
import colors from './colors';

const Heading = styled.h3`
  margin: 0 0 1rem 0;
  font-weight: 500;
  font-size: 18px;
`;

const Offer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.5rem 0;
`;

let offersArr = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt sapien ',
'In vel est blandit, bibendum arcu eget, sodales justo. Donec sit amet magna ac sapien porta pharetra.',
'Aliquam erat volutpat. Proin suscipit leo in pellentesque posuere. Fusce elit enim, facilisis',
'Nam at tempus diam Vestibulum lectus odio, tincidunt eu condimentum efficitur, tincidunt hendrerit', 
'Justo dui gravida est, commodo sollicitudin dolor massa id odio. Donec diam augue, facilisis ut libero'
];

const Offers = () => {
  return (
    <>
    <Heading>Offers: </Heading>
    {offersArr.map((offer) => {
      return (
        <Offer>
      <SellIcon style={{color: colors.orange6}}/>{offer}
    </Offer>
      )
    })}
    
    </>
  )
}

export default Offers