import { FeaturesData } from 'src/services/features';

export type FeaturesContextValue = {
  data?: FeaturesData;
  isLoading: boolean;
  isSuccess: boolean;
};
