import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import Cart from './componets/Cart/Cart';
import OrdenConfirm from './componets/OrdenConfirm/OrdenConfirm';
import Checkout from './componets/Checkout/Checkout';



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/orden-Confirmada/:id' element={<OrdenConfirm/>}/>
            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='*' element={<h1>Page Not Found 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
