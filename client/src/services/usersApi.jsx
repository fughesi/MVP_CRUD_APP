import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5650/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
