const features = points => {
  return points.map(point => {
    return {
      type: 'Feature',
      id: point._id,
      geometry: {
        type: point.location.type,
        coordinates: point.location.coordinates
      },
      properties: {
        title: point.title
      }
    };
  });
};

const createGeoJsonFeatureCollection = points => ({
  type: 'FeatureCollection',
  features: features(points)
});

export default createGeoJsonFeatureCollection;
