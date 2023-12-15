'use client'

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "../../types/types";



const initialState: Cart = {
    cart: [],
    error: '',
    isLoading: false
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        fetchCart: (state, action) => {
            state.cart = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                // ...state,
                ...action.payload.cart,
            };
        },
    },
});

export const { fetchCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
