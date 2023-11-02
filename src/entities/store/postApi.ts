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
      // query: (page = 1) => `posts?_page=${page}&_limit=10`,
      query: ({ limit = 7, start = 0 }) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
    }),
  }),
});

export const { useGetPostQuery, useGetInfinitePostsQuery } = postApi;
