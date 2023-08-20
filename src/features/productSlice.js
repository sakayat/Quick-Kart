import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
}

export const productFetching = createAsyncThunk("products/productFetching", async () => {
    const res = await axios.get("https://quick-kart.onrender.com/api/products")
    return res.data
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(productFetching.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(productFetching.fulfilled, (state, action) => {
                state.status = "successfully"
                state.items = action.payload
            })
            .addCase(productFetching.rejected, (state, action) => {
                state.status = "reject"
            })
    }
})

export default productsSlice.reducer;
