import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import DIR_LAYOUT from '../layouts/DIR_LAYOUT';
import {defaultShapeLineString} from '../consts';

const DirectionsLineLayer = ({directionData}) => {
  return (
    <MapboxGL.ShapeSource
      id="dir"
      shape={directionData.geoData || defaultShapeLineString}
    >
      <MapboxGL.LineLayer
        id="dirLinesLayer"
        style={{...DIR_LAYOUT, ...directionData.additionalStyle}}
      />
    </MapboxGL.ShapeSource>
  );
};
export default DirectionsLineLayer;
