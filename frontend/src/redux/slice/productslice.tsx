import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/types";



const initialState: Product = {
    product: [],
    error: "",
    isLoading: true,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProduct: (state, action) => {
            // state.product = [...state.product, action.payload];
            state.product = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...action.payload.product,
            };
        },
    },
});

export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;