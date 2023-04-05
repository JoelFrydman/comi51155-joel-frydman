import { Navbar } from '../components/Navbar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Nosotros from '../components/Nosotros/Nosotros';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Promociones from '../components/Promociones/Promociones';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Checkout from '../components/Checkout/Checkout';


const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
    <Routes> 
        <Route path= '/' element={<ItemListContainer/>}/>
        <Route path= '/destinos/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:itemId'element={<ItemDetailContainer />}/>
        <Route path= '/promociones' element={<Promociones/>}/>
        <Route path= '/nosotros' element={<Nosotros/>}/>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path='/checkout' element={ <Checkout /> } />
        <Route path= '*' element={<Navigate to={"/"} />}/>
    </Routes>
            <Footer/>
        </>
    )
}

export default PrivateRoutes