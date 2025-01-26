import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound';
import AdminProducts from './Components/AdminProductsPage';
import UserProducts from './Components/UserProducts';
import Cart from './Components/Cart';
import {Provider} from './Context';
import { useState } from 'react';

function App() {
  

  return (
    <BrowserRouter>
    <Provider>
      <Routes>
          <Route exact path='/' element={<ProtectedRoute element={<Home />} />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/products-user' element={<ProtectedRoute element={<UserProducts />} />} />
          <Route exact path='/products-admin' element={<ProtectedRoute element={<AdminProducts />} />} />
          <Route exact path='/cart' element={<ProtectedRoute element={<Cart />} />} />
          {/* <Route exact path='/products-user' element={<ProtectedRoute element={<UserProducts />} />} /> */}
          <Route exact path='/not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
