import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import DIR_LAYOUT from '../layouts/DIR_LAYOUT';

const DirectionsLineLayer = ({directionData}) => {
  const defaultShape = {type: 'LineString', coordinates: []};

  return (
    <MapboxGL.ShapeSource
      id="dir"
      shape={directionData.geoData || defaultShape}
    >
      <MapboxGL.LineLayer
        id="dirLinesLayer"
        style={{...DIR_LAYOUT, ...directionData.additionalStyle}}
      />
    </MapboxGL.ShapeSource>
  );
};
export default DirectionsLineLayer;
