import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "../src/components/Footer/Footer"
import Navbar from './components/Navbar';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes >
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/productos' element={<ItemListContainer />} />
      <Route path='/productos/:categoria' element={<ItemListContainer />} />
      <Route path='/carrito' element={<Carrito />} />
      <Route path='/checkout' element={<Checkout   />} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
