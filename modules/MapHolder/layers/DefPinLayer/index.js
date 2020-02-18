import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import SYMBOL_LAYOUT from '../layouts/SYMBOL_LAYOUT';
import getDefs from '../../../../defs';
import createGeoJsonFeatureCollection from '../../../../createGeoJsonFeatureCollection';

const DefPinLayer = ({setPopupData, setMapParameters}) => {
  const defPinPress = ({nativeEvent}) => {
    const feature = nativeEvent.payload;
    const {coordinates} = feature.geometry;

    setMapParameters({
      coordinates,
      zoom: 16
    });

    setPopupData({
      id: feature.id,
      coordinates,
      data: {
        someText: feature.properties.title
      }
    });
  };
  const defsFeaturesData = createGeoJsonFeatureCollection(getDefs());

  return (
    <MapboxGL.ShapeSource
      id="defPins"
      shape={defsFeaturesData}
      onPress={defPinPress}
      onLongPress={event => {
        console.log(event);
      }}
    >
      <MapboxGL.SymbolLayer id="defPinsSymbolsLayer" style={SYMBOL_LAYOUT} />
    </MapboxGL.ShapeSource>
  );
};
export default DefPinLayer;
