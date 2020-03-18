import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const UserLocation = ({setMapParameters, userLocation, setUserLocation}) => {
  const locationPress = () => {
    setMapParameters({
      coordinates: userLocation,
      zoom: 16
    });
  };
  const userLocationUpdate = event => {
    const {coords} = event;
    setUserLocation([coords.longitude, coords.latitude]);
  };
  return (
    userLocation && (
      <MapboxGL.UserLocation
        onPress={locationPress}
        visible={true}
        onUpdate={userLocationUpdate}
      />
    )
  );
};
export default UserLocation;
