import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Map as MapObject } from 'leaflet';

export const useMapParamsInUrl = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const zoomLevel = parseInt(searchParams.get('zoom') || '', 10) || 6;
  const lat = parseFloat(searchParams.get('lat') || '') || 49.438;
  const lng = parseFloat(searchParams.get('lng') || '') || 32.053;
  const center: [number, number] = [lat, lng];

  const onMoveEnd = useCallback(
    (map: MapObject) => {
      const center = map.getCenter();
      const newZoom = map.getZoom();
      navigate(
        `${location.pathname}?lat=${center.lat}&lng=${center.lng}&zoom=${newZoom}`
      );
    },
    [navigate, location.pathname]
  );

  return { zoomLevel, center, onMoveEnd };
};
