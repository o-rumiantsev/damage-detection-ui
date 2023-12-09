import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression, latLngBounds } from 'leaflet';
import { GeoJsonObject } from 'geojson';
import { FeatureGroup } from '../FeatureGroup';
import styles from './Map.module.css';

type MapProps = {
  zoomLevel?: number;
  maxZoomLevel?: number;
  minZoomLevel?: number;
  center?: LatLngExpression;
  maxBounds?: [southWest: LatLngExpression, northEast: LatLngExpression];
  features?: GeoJsonObject;
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
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FeatureGroup featureType="noDamage" />
      <FeatureGroup featureType="minorDamage" />
      <FeatureGroup featureType="majorDamage" />
      <FeatureGroup featureType="destroyed" />
    </MapContainer>
  );
};
