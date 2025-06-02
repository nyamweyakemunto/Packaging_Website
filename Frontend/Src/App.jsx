import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";//
import Footer from "./components/Footer";
import './App.css';
import About from "./pages/About";
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import RequestQuote from './pages/RequestQuote';

// Page imports (correct relative paths)
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="/productdetail" element={<ProductDetail />} />
               <Route path="/products" element={<Products />} />
               <Route path="/requestQuote" element={<RequestQuote />} />
   
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;