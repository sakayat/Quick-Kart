import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
	cartTotalAmount: 0,
	cartTotalQuantity: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			const existedItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (existedItemIndex >= 0) {
				state.cartItems[existedItemIndex].cartTotalQuantity += 1;
			} else {
				const newData = { ...action.payload, cartTotalQuantity: 1 };
				state.cartItems.push(newData);
			}
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		removeCart(state, action) {
			const updateData = state.cartItems.filter((item) => item.id !== action.payload.id);
			state.cartItems = updateData;
			localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
		},
		clearCart(state, action) {
			state.cartItems = [];
			localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
		},
		decreaseCart(state, action) {
			const indexItem = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (state.cartItems[indexItem].cartTotalQuantity > 1) {
				state.cartItems[indexItem].cartTotalQuantity -= 1;
			} else if (state.cartItems[indexItem].cartTotalQuantity === 1) {
				const updateCartItem = state.cartItems.filter((item) => item.id !== action.payload.id);
				state.cartItems = updateCartItem;
			}
			localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
		},
		getSubTotal(state, action) {
			const subTotal = state.cartItems.reduce((acc, item) => {
				const { price, cartTotalQuantity } = item;
				const itemTotal = price * cartTotalQuantity;
				acc += itemTotal;
				return acc;
			}, 0);
            state.cartTotalAmount = subTotal
		},
	},
});

export const { addToCart, removeCart, clearCart, decreaseCart, getSubTotal } = cartSlice.actions;

export default cartSlice.reducer;
