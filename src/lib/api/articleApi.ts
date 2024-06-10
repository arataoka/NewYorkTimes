import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NYTApiResponse, RateLimitErrorResponse } from '@/interface/nyt';

interface ArticlesQuery {
  q?: string;
  fq?: string;
}

export const NYT_API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;
export const BASE_URL = 'https://api.nytimes.com/svc/search/v2/';
export const API_PATH = 'articlesearch.json';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    searchArticles: builder.query<NYTApiResponse, ArticlesQuery>({
      query: ({ q, fq }) => ({
        url: API_PATH,
        params: {
          'api-key': NYT_API_KEY,
          q,
          fq,
        },
      }),
      transformErrorResponse: (error: RateLimitErrorResponse) => {
        return {
          message:
            error.status === 429
              ? 'Too Many Requests. Please try it later.'
              : `An unknown error occurred. Status Code : ${error.status}`,
        };
      },
      providesTags: (result, error, { q, fq }) =>
        result ? [{ type: 'Articles', id: `${q}-${fq}` }] : [], // タグの提供
    }),
  }),
});

export const { useSearchArticlesQuery } = articlesApi;
