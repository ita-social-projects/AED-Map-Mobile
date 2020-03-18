import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Camera from './components/Camera';
import DefPinLayer from './layers/DefPinLayer';
import DirectionLinesLayer from './layers/DirectionLinesLayer';
import DestinatonPinLayer from './layers/DestinatonPinLayer';
import UserLocation from './components/UserLocation';
import {
  setPopupData,
  setOrigin,
  setDestination,
  setDirectionData,
  setUserLocation,
  setMapParameters
} from '../../store/actions';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA'
);

const MapHolder = ({
  popupData,
  setPopupData,
  setOrigin,
  setDestination,
  destination,
  userLocation,
  setDirectionData,
  directionData,
  setUserLocation,
  mapParameters,
  setMapParameters
}) => {
  const longMapPress = event => {
    const {coordinates} = event.geometry;
    if (!destination) {
      setOrigin(userLocation);
      setDestination(coordinates);
    } else if (directionData || destination) {
      setDirectionData({geoData: null});
      setOrigin(null);
      setDestination(null);
    }
  };

  const shortMapPress = () => {
    setPopupData(null);
  };

  return (
    <View style={styles.mapContainer}>
      <MapboxGL.MapView
        style={{...styles.map, top: popupData ? -150 : 0}}
        onLongPress={longMapPress}
        onPress={shortMapPress}
        compassEnabled={true}
        onTouchEndCapture={() => {
          setMapParameters(null);
        }}
      >
        {mapParameters && <Camera mapParameters={mapParameters} />}
        <DirectionLinesLayer directionData={directionData} />
        <DestinatonPinLayer destinationCoords={destination} />
        <DefPinLayer setMapParameters={setMapParameters} />
        <UserLocation setMapParameters={setMapParameters} />
      </MapboxGL.MapView>
    </View>
  );
};

export default connect(
  state => ({
    popupData: state.popupData,
    destination: state.destination,
    directionData: state.directionData,
    userLocation: state.userLocation,
    mapParameters: state.mapParameters
  }),
  dispatch => ({
    setPopupData: data => dispatch(setPopupData(data)),
    setOrigin: origin => dispatch(setOrigin(origin)),
    setDestination: destination => dispatch(setDestination(destination)),
    setDirectionData: data => dispatch(setDirectionData(data)),
    setUserLocation: location => dispatch(setUserLocation(location)),
    setMapParameters: map => dispatch(setMapParameters(map))
  })
)(MapHolder);

const styles = StyleSheet.create({
  mapContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#282c34'
  },
  map: {
    flex: 1
  }
});
