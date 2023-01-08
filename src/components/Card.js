import React from "react";
import {currencyFormat} from "../utilities/currencyFormate";
import {useNavigate} from "react-router-dom";

const Card = ({item}) => {
    const navigate = useNavigate();
    const addToCartHandler = (id) => {
        navigate("/cart");
    };

    return (
        <div className="product-info bg-white shadow-lg rounded-xl hover:shadow-2xl duration-500">
            <img src={item.image} alt={item.name}/>
            <div className="product-content p-3">
                <span className="uppercase text-teal-500 text-sm font-bold">{item.category}</span>
                <h3 className="truncate pt-2">{item.name}</h3>
                <p className=" text-gray-500 truncate py-2">{item.description}</p>
                <div className="flex items-center justify-between pb-2">
                    <span className="text-red-500 text-sm font-bold">{currencyFormat(item.price)}</span>
                    <button
                        onClick={() => {
                            addToCartHandler(item.id);
                        }}
                        className="uppercase text-white bg-[#155263] hover:bg-orange-500 duration-300 rounded-sm py-2 px-6">
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
