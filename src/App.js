import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound';
import AdminProducts from './Components/AdminProductsPage';
import UserProducts from './Components/UserProducts';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/products-user' element={<ProtectedRoute element={<UserProducts />} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/products-admin' element={<ProtectedRoute element={<AdminProducts />} />} />
        <Route exact path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
