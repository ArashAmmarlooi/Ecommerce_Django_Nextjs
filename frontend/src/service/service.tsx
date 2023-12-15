// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Category, SubCategory, Product } from "../types/types";
// import { HYDRATE } from "next-redux-wrapper";
// import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
// const API_URL = process.env.API_URL

// export const ecommerce = createApi({
//     reducerPath: "ecommerce",
//     baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
//     keepUnusedDataFor: 3600,
//     // refetchOnMountOrArgChange: 900,
//     // refetchOnFocus: true,
//     extractRehydrationInfo(action, { reducerPath }) {
//         if (action.type === HYDRATE) {
//             return action.payload[reducerPath];
//         }
//     },
//     endpoints: (builder) => ({
//         getCategory: builder.query<Category, void>({
//             query: () => "category",
//         }),
//         getSubCategory: builder.query<SubCategory, void>({
//             query: () => "subcategory",
//         }),
//         // getCourseByName: builder.query<Course, any>({
//         //     query: (name) => `course/${name}`,
//         // }),
//         // getBlog: builder.query<Blog, void>({
//         //     query: () => "blogs",
//         // }),
//         // getBlogByName: builder.query<Blog, any>({
//         //     query: (name) => `blog/${name}`,
//         // }),
//     }),
// });

// export const {
//     useGetCategoryQuery,
//     useGetSubCategoryQuery,
//     // useGetBlogQuery,
//     // util: { getRunningOperationPromises },
// } = ecommerce;

// export const {
//     getCategory,
//     getSubCategory,
//     // getProduct,
//     // getCourseByName,
//     // getBlogByName,
// } = ecommerce.endpoints;