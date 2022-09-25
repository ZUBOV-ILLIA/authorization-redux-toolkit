import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPage } from 'Pages/RegisterPage';
import { LoginPage } from 'Pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
