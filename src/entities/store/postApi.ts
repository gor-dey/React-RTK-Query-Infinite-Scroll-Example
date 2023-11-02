// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const postApi = createApi({
//   reducerPath: "postApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com/",
//   }),
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "posts",
//     }),
//   }),
// });

// export const { useGetPostsQuery } = postApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (postId) => `posts/${postId}`,
    }),
    getInfinitePosts: builder.query({
      query: (page = 1) => `posts?_page=${page}&_limit=10`, // Adjust the page and limit as needed
    }),
  }),
});

export const { useGetPostQuery, useGetInfinitePostsQuery } = postApi;
