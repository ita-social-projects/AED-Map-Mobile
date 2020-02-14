import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA',
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
  },
  map: {
    flex: 1,
  },
  popupText: {
    fontSize: 20,
  },
  popupOuter: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,
    borderTopColor: '#000',
    height: 600,
  },
});

const App = () => {
  const [state, setState] = useState({
    coords: [24.031610977781128, 49.84180396191118],
    zoom: 13,
  });
  const [isUserLocationSet, setIsUserLocationSet] = useState(false);
  const [isPopupShown, setIsPopupShown] = useState(false);

  const userLocationUpdate = event => {
    if (!isUserLocationSet) {
      const {coords} = event;
      setState({
        coords: [coords.longitude, coords.latitude],
        zoom: 16,
      });
      setIsUserLocationSet(true);
      console.log('new coords');
    }
  };

  const longMapPress = event => {
    const {coordinates} = event.geometry;
    console.log(coordinates);
    setState({
      coords: coordinates,
      zoom: 16,
    });
    setIsPopupShown(true);
    console.log(isPopupShown);
  };
  const shortMapPress = event => {
    setIsPopupShown(false);
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          onLongPress={longMapPress}
          onPress={shortMapPress}
          compassEnabled={true}>
          <MapboxGL.Camera
            centerCoordinate={state.coords}
            zoomLevel={state.zoom}
          />
          <MapboxGL.UserLocation visible={true} onUpdate={userLocationUpdate} />
        </MapboxGL.MapView>
      </View>
      {isPopupShown && (
        <View style={styles.popupOuter}>
          <Text style={styles.popupText}>
            Something that will be shown in popup
          </Text>
          <Text style={styles.popupText}>
            Something that will be shown in popup
          </Text>
        </View>
      )}
    </View>
  );
};

export default App;
