export const defaultShapeCollection = {
  type: 'FeatureCollection',
  features: []
};

export const defaultShapeLineString = {type: 'LineString', coordinates: []};

export const createSingleFeature = destinationCoords => {
  //utils
  return {
    type: 'Feature',
    id: Math.random().toString(),
    geometry: {
      type: 'Point',
      coordinates: destinationCoords
    }
  };
};
