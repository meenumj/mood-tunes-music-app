import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
