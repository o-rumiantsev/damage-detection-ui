import { useContext } from 'react';
import { FeaturesData } from 'src/services/features';
import { FeaturesContext } from './FeaturesContext';

export const useFeaturesData = (): FeaturesData | undefined => {
  const { data, isSuccess } = useContext(FeaturesContext);

  if (isSuccess) {
    return data!;
  }
};
