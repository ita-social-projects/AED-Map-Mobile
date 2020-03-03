import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Camera from './components/Camera';
import DefPinLayer from './layers/DefPinLayer';
import DirectionLinesLayer from './layers/DirectionLinesLayer';
import DestinatonPinLayer from './layers/DestinatonPinLayer';
import createGeoJsonFeatureCollection from '../../createGeoJsonFeatureCollection';
import UserLocation from './components/UserLocation';
import getGPSlocationPermission from '../../getGPSlocationPermission';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA'
);

const MapHolder = ({
  setOrigin,
  setDestination,
  destination,
  userLocation,
  setDirectionData,
  directionData,
  setPopupData,
  popupData,
  setUserLocation,
  mapParameters,
  setMapParameters,
  defsFeaturesData
}) => {
  useEffect(() => {
    getGPSlocationPermission(location => {
      setUserLocation(location);
    });
  }, []);
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
        <DefPinLayer
          setMapParameters={setMapParameters}
          setPopupData={setPopupData}
          defibrillatorInfo={createGeoJsonFeatureCollection(defsFeaturesData)}
        />
        <UserLocation
          setMapParameters={setMapParameters}
          userLocation={userLocation}
          setUserLocation={setUserLocation}
        />
      </MapboxGL.MapView>
    </View>
  );
};

export default MapHolder;

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
