import React from 'react';
import { Map } from 'src/components/Map';
import { useMapParamsInUrl } from 'src/services/map';
import { useFeaturesData } from 'src/services/features';
import styles from './App.module.css';

export const App = () => {
  const featuresData = useFeaturesData();
  const { zoomLevel, center, onMoveEnd } = useMapParamsInUrl();

  return (
    <div className={styles.container}>
      <Map
        featuresData={featuresData}
        zoomLevel={zoomLevel}
        center={center}
        onMoveEnd={onMoveEnd}
      />
    </div>
  );
};
