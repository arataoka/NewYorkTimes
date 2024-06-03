import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NYTApiResponse, RateLimitErrorResponse } from '@/interface/nyt';

interface ArticlesQuery {
  q?: string;
  fq?: string;
}

const NYT_API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/search/v2/',
  }),
  endpoints: (builder) => ({
    searchArticles: builder.query<NYTApiResponse, ArticlesQuery>({
      query: ({ q, fq }) => ({
        url: 'articlesearch.json',
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
    }),
  }),
});

export const { useSearchArticlesQuery } = articlesApi;
