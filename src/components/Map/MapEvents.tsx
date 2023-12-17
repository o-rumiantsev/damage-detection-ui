import { useMapEvents } from 'react-leaflet';
import { Map as MapObject } from 'leaflet';

type MapEventsProps = {
  onMoveEnd?: (map: MapObject) => void;
};

export const MapEvents = ({ onMoveEnd = () => {} }: MapEventsProps) => {
  useMapEvents({
    moveend: (e) => onMoveEnd(e.target),
  });

  return null;
};
