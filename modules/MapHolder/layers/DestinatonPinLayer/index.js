import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import DESTINATION_LAYOUT from '../layouts/DESTINATION_LAYOUT';
import {createSingleFeature} from '../consts';

const DestinatonPinLayer = ({destinationCoords}) => {
  const mainFeature = createSingleFeature(destinationCoords);

  return destinationCoords ? (
    <MapboxGL.ShapeSource id="dest" shape={mainFeature}>
      <MapboxGL.SymbolLayer
        id="destSymbolLayer"
        style={DESTINATION_LAYOUT}
        aboveLayerID="dirLinesLayer"
        belowLayerID="defPinsSymbolsLayer"
      />
    </MapboxGL.ShapeSource>
  ) : null;
};

export default DestinatonPinLayer;
