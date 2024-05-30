// services/articlesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const NYT_API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/search/v2/',
  }),
  endpoints: (builder) => ({
    searchArticles: builder.query({
      query: ({ q, fq }) => ({
        url: 'articlesearch.json',
        params: {
          'api-key': NYT_API_KEY,
          q,
          fq,
        },
      }),
    }),
  }),
});

export const { useSearchArticlesQuery } = articlesApi;
