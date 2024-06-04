import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from '@/lib/api/articleApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [articlesApi.reducerPath]: articlesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(articlesApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
