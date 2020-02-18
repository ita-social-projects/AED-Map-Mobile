/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import polyline from '@mapbox/polyline';
import createDirReq from './createDirectionRequest';

import Popup from './modules/MapHolder/components/Popup';
import Camera from './modules/MapHolder/components/Camera';

import DefPinLayer from './modules/MapHolder/layers/DefPinLayer';
import DirectionLinesLayer from './modules/MapHolder/layers/DirectionLinesLayer';
import OriginDestPinsLayer from './modules/MapHolder/layers/OriginDestPinsLayer';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA'
);

const App = () => {
  const [mapParameters, setMapParameters] = useState({
    coordinates: [24.031610977781128, 49.84180396191118],
    zoom: 13
  });

  const [userLocation, setUserLocation] = useState(false);
  const [popupData, setPopupData] = useState(false);
  const [directionData, setDirectionData] = useState(null);
  const [directionValue] = useState(new Animated.ValueXY({x: -100, y: 0}));

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const [originDestCollection, setODCollection] = useState({
    type: 'FeatureCollection',
    features: []
  });

  useEffect(() => {
    slideDirectionWindow();
  }, [destination]);

  const buildDir = async (start, end, type) => {
    let tripType;
    switch (type) {
      case 0: {
        tripType = 'walking';
        break;
      }
      case 1: {
        tripType = 'cycling';
        break;
      }
      case 2: {
        tripType = 'driving';
        break;
      }
      case 3: {
        tripType = 'driving-traffic';
        break;
      }
    }

    const res = await fetch(createDirReq(start, end, tripType));
    const data = await res.json();

    const geoData = polyline.toGeoJSON(data.routes[0].geometry);
    // console.log(geoData);
    geoData.coordinates.unshift(start);
    geoData.coordinates.push(end);
    // return geoData;
    setDirectionData(geoData);
  };

  const slideDirectionWindow = () => {
    if (destination) {
      Animated.spring(directionValue, {
        toValue: {x: 0, y: 0},
        speed: 20
      }).start();
    } else {
      Animated.spring(directionValue, {
        toValue: {x: -100, y: 0},
        speed: 20
      }).start();
    }
  };

  const userLocationUpdate = event => {
    if (!userLocation) {
      const {coords} = event;
      setMapParameters({
        coordinates: [coords.longitude, coords.latitude],
        zoom: 16
      });
      setUserLocation([coords.longitude, coords.latitude]);
    }
  };

  const longMapPress = async event => {
    const {coordinates} = event.geometry;
    console.log(coordinates);
    if (!origin) {
      setOrigin(coordinates);
    } else if (!destination) {
      setDestination(coordinates);
    } else {
      setDirectionData(null);
      setOrigin(null);
      setDestination(null);
      setODCollection({features: []});
      return;
    }

    setODCollection({
      type: 'FeatureCollection',
      features: [
        ...originDestCollection.features,
        {
          type: 'Feature',
          id: Math.random().toString(),
          geometry: {
            type: 'Point',
            coordinates
          }
        }
      ]
    });
  };

  const displayWay = type => {
    buildDir(origin, destination, type);
  };

  const shortMapPress = event => {
    setPopupData(null);
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
          />

          <DirectionLinesLayer directionData={directionData} />
          <OriginDestPinsLayer originDestCollection={originDestCollection} />

          {/* <MapboxGL.UserLocation
            onPress={shortMapPress}
            visible={true}
            onUpdate={userLocationUpdate}
          /> */}
        </MapboxGL.MapView>
      </View>
      <Popup popupData={popupData} />

      <Animated.View style={[styles.driveTypes, directionValue.getLayout()]}>
        <TouchableOpacity
          onPress={() => {
            displayWay(0);
          }}
        >
          <View style={styles.driveTypeButton}>
            <Text style={styles.driveTypeText}>Walk</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            displayWay(1);
          }}
        >
          <View style={styles.driveTypeButton}>
            <Text style={styles.driveTypeText}>Cycle</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            displayWay(2);
          }}
        >
          <View style={styles.driveTypeButton}>
            <Text style={styles.driveTypeText}>Drive</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
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
  driveTypes: {
    padding: 15,
    backgroundColor: '#282c34',
    position: 'absolute',
    width: 100,
    left: 0
  },
  driveTypeButton: {
    padding: 10,
    backgroundColor: '#cfcfcf',
    textAlign: 'center',
    marginBottom: 10
  },
  driveTypeText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  }
});
