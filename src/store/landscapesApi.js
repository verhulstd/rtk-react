import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const landscapesApi = createApi({
  reducerPath: "landscapesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/landscapes/" }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllLandscapes: builder.query({
      query: () => ``,
      providesTags: () => ["Landscapes"],
    }),
    postLandscape: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Landscapes"],
    }),
    deleteLandscape: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Landscapes"],
    }),
    incrementLike: builder.mutation({
      query: ({ id, likes }) => ({
        url: `${id}`,
        method: "PATCH",
        body: {
          likes: likes + 1,
        },
      }),
      invalidatesTags: ["Landscapes"],
    }),
  }),
});

export default landscapesApi;
