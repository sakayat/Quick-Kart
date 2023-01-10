import React from 'react';
import {Link} from "react-router-dom";

const Slide = ({item}) => {
    return (
        <div className="container mx-auto">
            <div className="header-content text-white flex flex-col items-start justify-center gap-5 font-bold">
                <h1 className="uppercase text-4xl md:text-6xl">{item.headline}</h1>
                <p className="w-2/4 leading-7">{item.body}</p>
                <Link
                    className="relative uppercase border-2 hover:text-white hover:border-orange-500 py-3 px-8"
                    to={`/products/${item.category}`}>
                    <span className="relative z-10">{item.cta}</span>
                </Link>
            </div>
        </div>
    );
};

export default Slide;
