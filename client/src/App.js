import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Programs from './Programs/Programs';
import About from './About/About';
import Trainer from './Trainer/Trainer';
import ContactUs from './Contact/ContactUs';
import Drink from './Drink/Drink';
import Store from './pages/Store';
import Program from './Program/Program';
import Variety from './pages/Variety';
import Category from './shop/Category';
import Footer from './Footer/Footer';





const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainers" element={<Trainer />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/category" element={<Category />} />

        {/* Dynamic Routing */}
        <Route path="/program/:id" element={<Program />} />
        <Route path="/store/:id" element={<Variety />} />


      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
