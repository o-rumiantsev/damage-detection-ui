import { FeaturesData } from './types';
import { useGetFeaturesQuery } from './api';

export const useFeaturesData = (): FeaturesData => {
  const { data, isSuccess } = useGetFeaturesQuery();

  if (isSuccess) {
    return data!;
  }

  return {
    noDamage: [],
    minorDamage: [],
    majorDamage: [],
    destroyed: [],
  };
};
