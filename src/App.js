import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <ToastContainer/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
};

export default App;
