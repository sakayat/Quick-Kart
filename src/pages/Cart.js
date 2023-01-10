import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormat } from "../utilities/currencyFormate";
import { addToCart, clearCart, decreaseCart, getSubTotal, removeCart } from "../features/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const { cartItems: data, cartTotalAmount: total } = useSelector((state) => state.cart);
	const removeCartItem = (product) => {
		dispatch(removeCart(product));
	};
	const decreaseCartItem = (product) => {
		dispatch(decreaseCart(product));
	};
	const increaseCartItem = (product) => {
		dispatch(addToCart(product));
	};


    useEffect(() => {
        dispatch(getSubTotal())
    },[data, dispatch])


	return (
		<div className="container mx-auto cart">
			<h2 className="uppercase text-2xl font-bold text-center py-6">
				{data.length > 0 ? "your cart " : "your cart is empty"}
			</h2>
			<div className="text-center">
				{data.length === 0 && (
					<Link className="pb-5" to="/products">
						← Continue shopping
					</Link>
				)}
			</div>
			{data.length > 0 && (
				<>
					<div className="cart-headlines hidden md:grid grid-cols-5 uppercase border-b  gap-10 py-4">
						<div className="product-details md:col-span-2">product</div>
						<div className="product-price">unit price</div>
						<div className="product-quantity">quantity</div>
						<div className="product-total-price flex justify-end">total price</div>
					</div>
					{data.map((product) => (
						<div
							className="grid grid-cols-3 md:grid-cols-5 border-b gap-5 md:gap-10 py-4"
							key={product.id}>
							<div className="product-details flex col-span-2 gap-5">
								<img className="h-20" src={product.image} alt={product.name} />
								<div>
									<h4>{product.name}</h4>
									<button
										onClick={() => removeCartItem(product)}
										className="uppercase text-sm text-gray-500 py-2">
										Remove
									</button>
								</div>
							</div>
							<span className="md:text-start text-end">{currencyFormat(product.price)}</span>
							<div className="col-span-3 md:col-auto md:text-start text-center">
								<button onClick={() => decreaseCartItem(product)} className="py-2 px-4 bg-gray-300">
									-
								</button>
								<span className="py-2 px-4">{product.cartTotalQuantity}</span>
								<button onClick={() => increaseCartItem(product)} className="py-2 px-4 bg-gray-300">
									+
								</button>
							</div>
							<span className="text-end hidden md:block">{currencyFormat(product.price * product.cartTotalQuantity)}</span>
						</div>
					))}
					<div className="sub-total py-10 flex flex-col-reverse md:flex-row md:items-start items-center justify-between ">
						<button
							onClick={() => dispatch(clearCart())}
							className="uppercase font-bold text-orange-500 border border-[#155263] hover:bg-[#155263] hover:text-white duration-300 rounded-sm py-2 px-6">
							Clear cart
						</button>
						<div className="sub-total-details">
							<div className="flex justify-between pb-5">
								<span>Subtotal</span>
								<span className="text-teal-500">{currencyFormat(total)}</span>
							</div>
							<div className="flex flex-col gap-5">
								<span className="text-gray-500">
									Taxes and shipping costs are calculated at the checkout
								</span>
								<button className="uppercase text-white bg-[#155263] hover:bg-orange-500 duration-300 rounded-sm py-2 px-6">
									CHECKOUT
								</button>
								<Link className="pb-5" to="/products">
									← Continue shopping
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
