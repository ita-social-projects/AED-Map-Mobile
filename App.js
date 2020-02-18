import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Popup from './modules/Popup';
import Camera from './modules/MapHolder/components/Camera';
import DefPinLayer from './modules/MapHolder/layers/DefPinLayer';
import DirectionLinesLayer from './modules/MapHolder/layers/DirectionLinesLayer';
import DestinatonPinLayer from './modules/MapHolder/layers/DestinatonPinLayer';
import requestGeoLocationPermission from './locationAccess';
import Geolocation from 'react-native-geolocation-service';
import getDefs from './defs';
import createGeoJsonFeatureCollection from './createGeoJsonFeatureCollection';
import EmergencyBtn from './modules/buttons/EmergencyBtn';
import MoveTypes from './modules/buttons/MoveTypes';
import SplashScreen from 'react-native-splash-screen';
import SetAsDestinationBtn from './modules/buttons/SetAsDestinationBtn';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA'
);

const App = () => {
  const [mapParameters, setMapParameters] = useState({
    coordinates: [24.031610977781128, 49.84180396191118],
    zoom: 13
  });

  const [defsFeaturesData, setDefsFeaturesData] = useState(getDefs());
  const [userLocation, setUserLocation] = useState(null);
  const [popupData, setPopupData] = useState(false);
  const [directionData, setDirectionData] = useState({geoData: null});
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    //  geo permissions
    (async () => {
      await requestGeoLocationPermission();
      await Geolocation.getCurrentPosition(
        position => {
          const location = [
            position.coords.longitude,
            position.coords.latitude
          ];
          setUserLocation(location);
          setMapParameters({
            coordinates: location,
            zoom: 13
          });
        },
        error => {
          alert(error.message);
        },
        {
          enableHighAccuracy: true,
          showLocationDialog: true,
          timeout: Number.MAX_SAFE_INTEGER,
          maximumAge: 5000,
          distanceFilter: 5
        }
      );
    })();

    SplashScreen.hide();
  }, []);

  const userLocationUpdate = event => {
    const {coords} = event;
    setUserLocation([coords.longitude, coords.latitude]);
  };

  const longMapPress = event => {
    const {coordinates} = event.geometry;
    console.log(coordinates);

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

  const locationPress = () => {
    setMapParameters({
      coordinates: userLocation,
      zoom: 16
    });
  };

  return (
    <View style={styles.page}>
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
          <Camera mapParameters={mapParameters} />

          <DefPinLayer
            setMapParameters={setMapParameters}
            setPopupData={setPopupData}
            defibrillatorInfo={createGeoJsonFeatureCollection(defsFeaturesData)}
          />

          <DirectionLinesLayer directionData={directionData} />

          <DestinatonPinLayer destinationCoords={destination} />

          {userLocation && (
            <MapboxGL.UserLocation
              onPress={locationPress}
              visible={true}
              onUpdate={userLocationUpdate}
            />
          )}
        </MapboxGL.MapView>
      </View>

      {!destination && userLocation && (
        <EmergencyBtn
          userLocation={userLocation}
          defsFeaturesData={defsFeaturesData}
          setPopupData={setPopupData}
          setOrigin={setOrigin}
          setDestination={setDestination}
          setMapParameters={setMapParameters}
        />
      )}

      <Popup popupData={popupData} setPopupData={setPopupData} />

      {destination && (
        <MoveTypes
          setDirectionData={setDirectionData}
          origin={origin}
          destination={destination}
        />
      )}

      {!destination && popupData && (
        <SetAsDestinationBtn
          popupData={popupData}
          setDirectionData={setDirectionData}
          userLocation={userLocation}
          setOrigin={setOrigin}
          setDestination={setDestination}
          setMapParameters={setMapParameters}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  mapContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#282c34'
  },
  map: {
    flex: 1
  },
  destBtn: {
    color: '#fcfcfc',
    lineHeight: 25,
    fontSize: 16
  },
  destHolder: {
    position: 'absolute',
    top: 30,
    right: 0,
    padding: 10,
    backgroundColor: '#282c34'
  }
});
