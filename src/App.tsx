import { Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from './context/ShoppingCartContext';

import "./styles/rgb.css";

function App() {

  return <ShoppingCartProvider>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Container className='mb-4'><Store/></Container>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </ShoppingCartProvider>

}

export default App;
