import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import DIR_LAYOUT from '../layouts/DIR_LAYOUT';

const DirectionsLineLayer = ({directionData}) => {
  return (
    directionData && (
      <MapboxGL.ShapeSource id="dir" shape={directionData}>
        <MapboxGL.LineLayer
          id="dirPinsLayer"
          style={DIR_LAYOUT}
          belowLayerID="destSymbolLayer"
        />
      </MapboxGL.ShapeSource>
    )
  );
};
export default DirectionsLineLayer;
