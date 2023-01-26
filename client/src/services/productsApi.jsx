import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5650/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    addProduct: builder.mutation({
      mutation: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = productsApi;
