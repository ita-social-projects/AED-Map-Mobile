import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA',
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
  },
  map: {
    flex: 1,
  },
});

const App = () => {
  const [mapCenter, setMapCenter] = useState({
    coords: [24.031610977781128, 49.84180396191118],
    zoom: 13,
    centeredOnUser: false,
  });

  const someEvent = event => {
    console.log(MapboxGL.Camera);
  };

  const userLocationUpdate = event => {
    const {coords} = event;
    setMapCenter({
      coords: [coords.longitude, coords.latitude],
      centeredOnUser: true,
      zoom: 13,
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} onLongPress={someEvent}>
          <MapboxGL.Camera
            centerCoordinate={mapCenter.coords}
            zoomLevel={mapCenter.zoom}
          />
          <MapboxGL.UserLocation visible={true} onUpdate={userLocationUpdate} />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default App;
