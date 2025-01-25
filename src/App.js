import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute element={<Home />} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
