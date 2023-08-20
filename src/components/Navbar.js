import React from 'react';
import {NavLink} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import { useSelector } from "react-redux";
const Navbar = () => {
    
	const { cartItems: data } = useSelector((state) => state.cart);
    return (
        <div className="dark:bg-white shadow-md relative z-10">
            <nav className="navbar container mx-auto flex items-center justify-between py-5 px-8">
                <div className="logo">
                    <NavLink to="/">
                        <span className="text-2xl text-amber-500 font-bold">T</span>ech{" "}
                        <span className="text-2xl text-amber-500 font-bold">A</span>lpha
                    </NavLink>
                </div>
                <ul className="nav-links flex items-center gap-10">
                    <li className="item-1">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="item-2">
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="cart relative">
                            <FiShoppingCart className="text-2xl"/>
                            <span
                                className=" inline-flex justify-center items-center absolute bottom-3 left-3 bg-red-500 text-white rounded-full w-5 h-5">{data.length}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
