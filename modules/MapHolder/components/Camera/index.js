import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const Camera = ({mapParameters}) => {
  return (
    mapParameters && (
      <MapboxGL.Camera
        centerCoordinate={mapParameters.coordinates}
        zoomLevel={mapParameters.zoom}
        animationDuration={1000}
      />
    )
  );
};
export default Camera;
