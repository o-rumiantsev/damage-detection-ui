import { PathOptions } from 'leaflet';
import { FeaturesData } from 'src/services/features';

const featureStyles: Record<keyof FeaturesData, PathOptions> = {
  noDamage: {
    color: '#00ff00',
    opacity: 0.4,
    fillColor: '#00ff00',
  },
  minorDamage: {
    color: '#0000ff',
    opacity: 0.4,
    fillColor: '#0000ff',
  },
  majorDamage: {
    color: '#ff00ff',
    opacity: 0.4,
    fillColor: '#ff00ff',
  },
  destroyed: {
    color: '#ff0000',
    opacity: 0.4,
    fillColor: '#ff0000',
  },
};

export default featureStyles;
