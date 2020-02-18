import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import DESTINATION_LAYOUT from '../layouts/DESTINATION_LAYOUT';

const DestinatonPinLayer = ({destinationCoords}) => {
  const defaultShape = {
    type: 'Feature',
    id: Math.random().toString(),
    geometry: {
      type: 'Point',
      coordinates: destinationCoords
    }
  };

  return defaultShape.geometry.coordinates ? (
    <MapboxGL.ShapeSource id="dest" shape={defaultShape}>
      <MapboxGL.SymbolLayer
        id="destSymbolLayer"
        style={DESTINATION_LAYOUT}
        belowLayerID="defPinsSymbolsLayer"
        aboveLayerID="dirLinesLayer"
      />
    </MapboxGL.ShapeSource>
  ) : null;
};

export default DestinatonPinLayer;
