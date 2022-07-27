import './App.css';
import CartItem from './components/CartItem';
import Home from './pages/Home';
import Cart from './pages/Cart';
import IndividualProductPage from './pages/IndividualProductPage';
import ProductDetails from './components/ProductDetails';
import ProductsPage from './pages/ProductsPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/all' element={<ProductsPage />}/>
      <Route path='/electronics' element={<ProductsPage />}/>
      <Route path='/jewelery' element={<ProductsPage />}/>
      <Route path='/mens' element={<ProductsPage />}/>
      <Route path='/womens' element={<ProductsPage />}/>
      <Route path='/products/:id' element={<IndividualProductPage />}/>
      <Route path='/cart' element={<Cart />}/>

    </Routes>
      {/* <Home /> */}
      {/* <ProductsPage /> */}
      {/* <Cart /> */}
      {/* <ItemList /> */}
      {/* <Total /> */}
      {/* <CartItem /> */}
      {/* <ProductDetails /> */}
      {/* <IndividualProductPage /> */}
      </BrowserRouter>
    
    </div>
  );
}

export default App;
