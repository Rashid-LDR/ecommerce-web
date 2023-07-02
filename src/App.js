import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Services from './Components/Services';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services/>}/>
          {/* <Route path="/ProductList/:id" element={<ProductList />} /> */}
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
