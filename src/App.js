import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Promociones from './components/Promociones/Promociones';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
    
      <Navbar />

      <Routes> 
        <Route path= '/' element={<ItemListContainer/>}/>
        <Route path= '/destinos/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:itemId'element={<ItemDetailConteiner />}/>
        <Route path= '/promociones' element={<Promociones/>}/>
        <Route path= '/nosotros' element={<Nosotros/>}/>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path= '*' element={<Navigate to={"/"} />}/>
      </Routes>
      
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
