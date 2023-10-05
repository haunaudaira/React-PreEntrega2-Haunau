import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "../src/components/Footer/Footer"
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import Juguetes from './components/Juguetes/Juguetes';
import Antipulgas from './components/Antipulgas/Antipulgas';
import Higiene from './components/Higiene/Higiene';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes >
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/productos' element={<ItemListContainer />} />
      <Route path='/productos/:categoria' element={<ItemListContainer />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
