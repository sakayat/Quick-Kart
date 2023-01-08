import React, {useState} from "react";


const Cart = () => {


    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }


    return (
        <div className="container mx-auto cart">
            <div className="cart-headlines hidden md:grid grid-cols-5 uppercase border-b  gap-10 py-4">
                <div className="product-details md:col-span-2">product</div>
                <div className="product-price">unit price</div>
                <div className="product-quantity">quantity</div>
                <div className="product-total-price flex justify-end">total price</div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 border-b gap-5 md:gap-10 py-4">
                <div className="product-details flex col-span-2 gap-5">
                    <img
                        className="h-20"
                        src="https://res.cloudinary.com/dy28teazb/image/upload/v1668172650/React%20Shopping/Products/FU642_zstpwl.jpg"
                        alt=""
                    />
                    <div>
                        <h4>Apple Watch Series 4 (GPS, 40MM) - Silver Aluminum Case</h4>
                        <button className="uppercase text-sm text-gray-500 py-2">Remove</button>
                    </div>
                </div>
                <span className="md:text-start text-end">$57.6</span>
                <div className="col-span-3 md:col-auto md:text-start text-center">
                    <button onClick={() => decrement()} className="py-2 px-4 bg-gray-300">-</button>
                    <span className="py-2 px-4">{count}</span>
                    <button onClick={() => increment()} className="py-2 px-4 bg-gray-300">+</button>
                </div>
                <span className="text-end hidden md:block">$257</span>
            </div>
            <div
                className="sub-total py-10 flex flex-col-reverse md:flex-row md:items-start items-center justify-between ">
                <button
                    className="uppercase font-bold text-orange-500 border border-[#155263] hover:bg-[#155263] hover:text-white duration-300 rounded-sm py-2 px-6">
                    Clear cart
                </button>
                <div className="sub-total-details">
                    <div className="flex justify-between pb-5">
                        <span>Subtotal</span>
                        <span className="text-teal-500">$257</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-gray-500">Taxes and shipping costs are calculated at the checkout</span>
                        <button
                            className="uppercase text-white bg-[#155263] hover:bg-orange-500 duration-300 rounded-sm py-2 px-6">
                            CHECKOUT
                        </button>
                        <button className="pb-5" to="/"> ← Continue shopping</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
