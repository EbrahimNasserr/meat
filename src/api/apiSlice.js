import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dashboard.meatandcheezz.com/api/" }), // Update the base URL as per your API
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products", // Example query
    }),
    getReviews: builder.query({
      query: () => "/reviews", // Example query
    }),
  }),
});

export const { useGetProductsQuery , useGetReviewsQuery } = apiSlice;
