import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Map as MapObject, LatLngExpression, latLngBounds } from 'leaflet';
import { FeaturesData } from 'src/services/features';
import { FeatureGroup } from '../FeatureGroup';
import { MapEvents } from './MapEvents';
import styles from './Map.module.css';

type MapProps = {
  featuresData: FeaturesData;
  zoomLevel?: number;
  maxZoomLevel?: number;
  minZoomLevel?: number;
  center?: LatLngExpression;
  maxBounds?: [southWest: LatLngExpression, northEast: LatLngExpression];
  onMoveEnd?: (map: MapObject) => void;
};

export const Map = ({
  zoomLevel = 6,
  maxZoomLevel = 20,
  minZoomLevel = 6,
  center = [49.438, 32.053],
  maxBounds = [
    [42.438, 12.053],
    [54.438, 48.053],
  ],
  onMoveEnd = () => {},
  featuresData,
}: MapProps) => {
  return (
    <MapContainer
      className={styles.container}
      center={center}
      zoom={zoomLevel}
      maxZoom={maxZoomLevel}
      minZoom={minZoomLevel}
      maxBounds={latLngBounds(...maxBounds)}
    >
      <MapEvents onMoveEnd={onMoveEnd} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FeatureGroup featureType="noDamage" features={featuresData.noDamage} />
      <FeatureGroup
        featureType="minorDamage"
        features={featuresData.minorDamage}
      />
      <FeatureGroup
        featureType="majorDamage"
        features={featuresData.majorDamage}
      />
      <FeatureGroup featureType="destroyed" features={featuresData.destroyed} />
    </MapContainer>
  );
};
