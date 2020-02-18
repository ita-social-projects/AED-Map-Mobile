import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import DESTINATION_LAYOUT from '../layouts/DESTINATION_LAYOUT';

const OriginDestPinsLayer = ({originDestCollection}) => {
  return originDestCollection.features.length > 0 ? (
    <MapboxGL.ShapeSource id="dest" shape={originDestCollection}>
      <MapboxGL.SymbolLayer
        id="destSymbolLayer"
        style={DESTINATION_LAYOUT}
        belowLayerID="defPinsSymbolsLayer"
      />
    </MapboxGL.ShapeSource>
  ) : null;
};
export default OriginDestPinsLayer;
