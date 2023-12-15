import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "../../types/types";



const initialState: Category = {
    category: [],
    error: '',
    isLoading: false
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        fetchCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                // ...state,
                ...action.payload.category,
            };
        },
    },
});

export const { fetchCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
