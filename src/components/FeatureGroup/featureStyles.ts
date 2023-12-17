import { PathOptions } from 'leaflet';
import { FeaturesData } from 'src/services/features';

const featureStyles: Record<keyof FeaturesData, PathOptions> = {
  noDamage: {
    color: '#00ff00',
    opacity: 1,
    fillColor: '#00ff00',
    fillOpacity: 0.7,
  },
  minorDamage: {
    color: '#0000ff',
    opacity: 1,
    fillColor: '#0000ff',
    fillOpacity: 0.7,
  },
  majorDamage: {
    color: '#ff00ff',
    opacity: 1,
    fillColor: '#ff00ff',
    fillOpacity: 0.7,
  },
  destroyed: {
    color: '#ff0000',
    opacity: 1,
    fillColor: '#ff0000',
    fillOpacity: 0.7,
  },
};

export default featureStyles;
