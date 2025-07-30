import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import './styles/App.css';



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />  {/* Navbar utilise des Link issus de react-router donc doit être enfant de BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
