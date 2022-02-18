// * React Imports
import React from "react";

// * React Router Imports
import { Routes, Route } from "react-router";

// * Layout Imports
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

// * Pages Imports
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:id/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
