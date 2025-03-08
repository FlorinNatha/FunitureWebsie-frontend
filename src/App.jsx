import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/User/Home';
import Shop from './pages/User/Shope';
import AboutUs from './pages/User/AboutUs';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import Services from './pages/User/Services';
import Blog from './pages/User/Blog';
import ContactUs from './pages/User/ContactUs';
import Cart from './pages/User/Cart';
import Checkout from './pages/User/Checkout';
import Thankyou from './pages/User/ThankYou';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path='/thankyou' element={<Thankyou/>}></Route>
        </Routes>
        <FooterSection/>
      </Router>
    </div>
  )
}

export default App

