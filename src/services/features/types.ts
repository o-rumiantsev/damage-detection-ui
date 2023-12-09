export type FeaturesData = {
  noDamage: Feature[];
  minorDamage: Feature[];
  majorDamage: Feature[];
  destroyed: Feature[];
};

export type Feature = {
  type: 'Feature';
  properties: FeatureMetadata;
  geometry: FeatureGeometry;
};

type FeatureMetadata = {
  id: string;
  name: string;
  description: string;
};

type FeatureGeometry = {
  type: 'Polygon';
  coordinates: Coordinates[][];
};

type Coordinates = [number, number];
