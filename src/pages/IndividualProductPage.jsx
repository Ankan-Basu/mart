import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeSlectedProduct, selectProduct } from '../redux/actions/pdtActions'

const IndividualProductPage = () => {
  let location = useParams();
  let id = location.id;

  const dispatch = useDispatch();

  const getPdtData = async(id) => {
    let URL = 'https://fakestoreapi.com/products/' + id;
    let resp = await fetch(URL);
    let data = await resp.json();
    // console.log(data);
    dispatch(selectProduct(data));
  }

  // let pdt = null;
  
  useEffect(() => {
    getPdtData(id);
    // pdt = useSelector(state => state.updateProductList.currProduct);
    return () => {
      dispatch(removeSlectedProduct());  
    }
  }, [id]);

  return (
    <div>
    <Navbar />
    <ProductDetails />
    <Footer />
    </div>
  )
}

export default IndividualProductPage