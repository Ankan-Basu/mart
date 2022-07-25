import styled from 'styled-components'
import slides from './SlideData';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const BannerContainer = styled.div`
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => {
    return props.slideIndex*(-100) + '%';
    }});
`;

const Slide = styled.div`
  display: flex;
  ${'' /* width: 100vw; */}
  min-width: 100%;
  max-width: 100%;
  ${'' /* width: 100vw; */}
  overflow: hidden;
  border: 2px solid red;
`;

const Left = styled.div`
  border: 2px solid green;
  height: 85vh;
  flex: 2;
  ${'' /* overflow: hidden; */}
`;

const Right = styled.div`
  flex: 1;
  ${'' /* overflow: hidden; */}

`;


const ArrowButton = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.type === 'left' && '10px'};
  right: ${props => props.type === 'right' && '10px'};
  cursor: pointer;
  z-index: 2;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;



const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (type) => {
    if (type === 'left') {
      if (slideIndex > 0) {
        setSlideIndex(slideIndex - 1);
      } else {
        setSlideIndex(slides.length - 1)
      }
    } else {
      if (slideIndex < slides.length - 1) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }
  }

  

  return (
   
    <Container>
      <ArrowButton type="left" onClick={() => handleClick('left')}>
        <ArrowLeftIcon style={{
          fontSize: '2.5rem'
        }} />
      </ArrowButton>

      <BannerContainer slideIndex={slideIndex}>

        {slides.map((slide) => {
          return (
            
            <Slide key={slide.id}>
              <Left>
                <Img src={slide.img} />
              </Left>
              <Right>
                <h3>{slide.desc}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nihil natus? Saepe quas quibusdam mollitia consequuntur deserunt
                </p>
              </Right>
            </Slide>
            
          );
        }
        )}

      </BannerContainer>

      <ArrowButton type="right" onClick={() => handleClick('right')}>
        <ArrowRightIcon style={{
          fontSize: '2.5rem'
        }} />
      </ArrowButton>
    </Container>
  )
}

export default Banner;