import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import SYMBOL_LAYOUT from '../layouts/SYMBOL_LAYOUT';
import {defaultShapeCollection} from '../consts';

const DefPinLayer = ({defibrillatorInfo, setPopupData, setMapParameters}) => {
  const defPinPress = ({nativeEvent}) => {
    const feature = nativeEvent.payload;
    const {coordinates} = feature.geometry;

    setMapParameters({
      coordinates,
      zoom: 15
    });

    setPopupData({
      id: feature.id,
      coordinates,
      data: {}
    });
  };

  return (
    <MapboxGL.ShapeSource
      id="defPins"
      shape={defibrillatorInfo || defaultShapeCollection}
      onPress={defPinPress}
    >
      <MapboxGL.SymbolLayer
        id="defPinsSymbolsLayer"
        style={SYMBOL_LAYOUT}
        aboveLayerID="dirLinesLayer"
      />
    </MapboxGL.ShapeSource>
  );
};
export default DefPinLayer;
