import React, {useEffect} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {connect} from 'react-redux';
import SYMBOL_LAYOUT from '../layouts/SYMBOL_LAYOUT';
import createGeoJsonFeatureCollection from '../../../../createGeoJsonFeatureCollection';
import {fetchDefs, setPopupData} from '../../../../store/actions';
import {defaultShapeCollection} from '../consts';

const DefPinLayer = ({setMapParameters, fetchingDefs, defs, setPopupData}) => {
  useEffect(() => {
    fetchingDefs();
  }, []);
  const defsFeaturesData =
    createGeoJsonFeatureCollection(defs) || defaultShapeCollection;
  const defPinPress = ({nativeEvent}) => {
    const feature = nativeEvent.payload;
    setMapParameters({
      coordinates: feature.geometry.coordinates,
      zoom: 15
    });
    setPopupData({id: feature.id});
  };

  return (
    <MapboxGL.ShapeSource
      id="defPins"
      shape={defsFeaturesData}
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
export default connect(
  state => ({
    defs: state.featureCollection
  }),
  dispatch => ({
    fetchingDefs: () => dispatch(fetchDefs()),
    setPopupData: data => dispatch(setPopupData(data))
  })
)(DefPinLayer);
