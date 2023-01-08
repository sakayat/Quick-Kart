import React from 'react';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
};

export default App;
