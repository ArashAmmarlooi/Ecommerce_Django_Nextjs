import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SubCategory } from "../../types/types";



const initialState: SubCategory = {
    subcategory: [],
    error: '',
    isLoading: false
};

export const subCategorySlice = createSlice({
    name: "subcategory",
    initialState,
    reducers: {
        fetchSubCategory: (state, action) => {
            // state.subcategory = [...state.subcategory, action.payload];
            state.subcategory = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                // ...state,
                ...action.payload.subcategory,
            };
        },
    },
});

export const { fetchSubCategory } = subCategorySlice.actions;
export const subcategoryReducer = subCategorySlice.reducer;