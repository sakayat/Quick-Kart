import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { currencyFormat } from "../utilities/currencyFormate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  return (
    <div className="product-info bg-white shadow-lg rounded-xl hover:shadow-2xl duration-500 flex flex-col gap-7 group relative overflow-hidden cursor-pointer py-12 px-4">
      <div className="flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-48 hover:scale-110 transition duration-300 transform translate-x-4"
        />
      </div>
      <div className="button flex flex-col gap-2 absolute top-0 right-0 opacity-0  group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={() => addToCartHandler(item)}
          className="bg-slate-800 text-white p-3"
        >
          <BsPlusLg />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl truncate">{item.name}</h3>
        <p className="text-sm text-gray-600 truncate">{item.description}</p>
        <p className="text-sm">{currencyFormat(item.price)}</p>
      </div>
    </div>
  );
};

export default Card;
