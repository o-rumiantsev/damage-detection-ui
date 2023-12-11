import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FeaturesData } from './types';

const config = {
  apiUrl: 'http://localhost:8000',
};

type PolygonsResponse = {
  data: Array<{
    damage_class: 'no-damage' | 'minor-damage' | 'major-damage' | 'destroyed';
    coordinates: Array<[number, number]>;
  }>;
};

const getFeatureType = (
  damageClass: PolygonsResponse['data'][number]['damage_class']
): keyof FeaturesData => {
  switch (damageClass) {
    case 'no-damage':
      return 'noDamage';
    case 'minor-damage':
      return 'minorDamage';
    case 'major-damage':
      return 'majorDamage';
    case 'destroyed':
      return 'destroyed';
  }
};

export const featuresApi = createApi({
  reducerPath: 'featuresApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: (builder) => ({
    getFeatures: builder.query<FeaturesData, void>({
      query: () => 'polygons',
      transformResponse: (response: PolygonsResponse) => {
        const features: FeaturesData = {
          noDamage: [],
          minorDamage: [],
          majorDamage: [],
          destroyed: [],
        };

        response.data.forEach((polygon) => {
          const featureType = getFeatureType(polygon.damage_class);
          features[featureType].push({
            type: 'Feature',
            properties: {
              id: polygon.damage_class,
              name: polygon.damage_class,
              description: polygon.damage_class,
            },
            geometry: {
              type: 'Polygon',
              coordinates: [polygon.coordinates],
            },
          });
        });

        return features;
      },
    }),
  }),
});

export const { useGetFeaturesQuery } = featuresApi;
