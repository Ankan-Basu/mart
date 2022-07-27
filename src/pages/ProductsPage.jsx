import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/pdtActions';
import { resetProducts } from '../redux/actions/pdtActions';

const Container = styled.div`
  ${'' /* border: 2px solid red; */}
  padding: 2rem 1rem;
  display: flex;
  ${'' /* justify-content: space-between; */}
  gap: 2rem;
  max-width: 100%;
  ${'' /* position: relative; */}

`;

const Heading = styled.h2`
  padding: 2rem 0 0 1.5rem;
  font-weight: 500;
`;

const Sidebar = styled.aside`
  ${'' /* border: 2px solid green; */}
  width: 240px;
  position: relative;
`;

const SidebarMenu = styled.div`
  ${'' /* border: 2px solid pink; */}
  position: sticky;
  top: 5rem;
  padding: 1rem;
  border-radius: 0.25rem;
`;

const ProductsContainer = styled.div`
  ${'' /* border: 2px solid green; */}
  display: flex;
  justify-content: center;
  ${'' /* width: 100vw; */}
  flex: 2;
`;

const categories = {
  all: '/',
  electronics: "/electronics",
  jewelery: "/jewelery",
  mens: "/men's clothing",
  womens: "/women's clothing"
};


const ProductsPage = () => {
  let location = useLocation();
  let pathName = location.pathname;
  //removing the first char '/' from the pathName
  let category = pathName.substring(1, pathName.length);

  const dispatch = useDispatch();


  const fetchData = async (category) => {
    let URL = 'https://fakestoreapi.com/products';
    if (category !== 'all') {
      URL = URL + '/category';
    }
    URL = URL + categories[category];
  
    let resp = await fetch(URL);
    let data = await resp.json();
  
    // console.log(data);
    dispatch(setProducts(data));
  }

  
  useEffect(() => {
    fetchData(category);

    return () => {
      dispatch(resetProducts())
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Heading>RESULTS</Heading>
      <Container>
        <Sidebar>
          <SidebarMenu>
            <h3 style={{ fontWeight: '500' }}>Sort Type</h3>
            <p>Ascending</p>
            <p>Descending</p>
            <br />
            <h3 style={{ fontWeight: '500' }}>Sort by</h3>
            <p>Price</p>
            <p>Rating</p>
            <p>Number of Ratings</p>
          </SidebarMenu>
        </Sidebar>
        <ProductsContainer>
          <ProductsList />
        </ProductsContainer>
      </Container>
      <Footer />
    </>
  )
}

export default ProductsPage