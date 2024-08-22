import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

import menBanner from './assets/banner_mens.png';
import womenBanner from './assets/banner_women.png';
import kidsBanner from './assets/banner_kids.png';
import { useSelector } from 'react-redux';
import LoadingModal from './Components/LoadingModal';

function App() {
  const { alert,loading } = useSelector((store) => store.user);



  return (
    <div className='font-[Poppins]'>
      {alert && <Error />}
      {loading&&<LoadingModal/>}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route
            path='/men'
            element={
              <ShopCategory
                category='men'
                banner={menBanner}
                endPoint='api/products/categories/men'
              />
            }
          />
          <Route
            path='/Women'
            element={
              <ShopCategory
                category='Women'
                banner={womenBanner}
                endPoint='api/products/categories/women'
              />
            }
          />
          <Route
            path='/kids'
            element={
              <ShopCategory
                category='kids'
                banner={kidsBanner}
                endPoint='api/products/categories/kid'
              />
            }
          />

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
