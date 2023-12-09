import { createContext } from 'react';
import { FeaturesContextValue } from './types';

export const FeaturesContext = createContext<FeaturesContextValue>(null!);
