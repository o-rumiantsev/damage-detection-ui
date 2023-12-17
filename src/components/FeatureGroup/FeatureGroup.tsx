import React from 'react';
import {
  FeatureGroup as LeafletFeatureGroup,
  GeoJSON,
  Popup,
} from 'react-leaflet';
import { Feature, FeaturesData } from 'src/services/features';
import featureStyles from './featureStyles';

type FeatureGroupProps = {
  featureType: keyof FeaturesData;
  features: Feature[];
};

export const FeatureGroup = ({ featureType, features }: FeatureGroupProps) => {
  const style = featureStyles[featureType];
  return (
    <LeafletFeatureGroup>
      {features.map((feature) => (
        <GeoJSON key={feature.properties.id} data={feature} style={style}>
          <Popup>{feature.properties.name}</Popup>
        </GeoJSON>
      ))}
    </LeafletFeatureGroup>
  );
};
