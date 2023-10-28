import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import CartIcon from "./components/CartIcon";
const App = () => {
    return (
        <div className="overflow-hidden">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
                <Sidebar />
            </Router>
            <CartIcon />
        </div>
    );
};

export default App;
