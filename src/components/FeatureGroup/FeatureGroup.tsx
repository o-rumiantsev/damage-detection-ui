import React from 'react';
import {
  FeatureGroup as LeafletFeatureGroup,
  GeoJSON,
  Popup,
} from 'react-leaflet';
import { FeaturesData } from 'src/services/features';
import { useFeaturesData } from 'src/store/features';
import featureStyles from './featureStyles';

type FeatureGroupProps = {
  featureType: keyof FeaturesData;
};

export const FeatureGroup = ({ featureType }: FeatureGroupProps) => {
  const data = useFeaturesData();

  if (!data) {
    return null;
  }

  const features = data![featureType];
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
