import requestGeoLocationPermission from './locationAccess';
import Geolocation from 'react-native-geolocation-service';

export default async callback => {
  await requestGeoLocationPermission();
  await Geolocation.getCurrentPosition(
    position => {
      const location = [position.coords.longitude, position.coords.latitude];
      callback && callback(location);
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
};
