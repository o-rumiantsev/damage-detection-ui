import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FeaturesData } from './types';

const config = {
  apiUrl: 'http://localhost:3000',
};

export const featuresApi = createApi({
  reducerPath: 'featuresApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (builder) => ({
    getFeatures: builder.query<FeaturesData, void>({
      query: () => 'features',
      transformResponse: (response: { data: FeaturesData }) => response.data,
    }),
  }),
});

export const { useGetFeaturesQuery } = featuresApi;
