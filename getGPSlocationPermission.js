import requestGeoLocationPermission from './locationAccess';
import Geolocation from 'react-native-geolocation-service';

export default async callback => {
  const granted = await requestGeoLocationPermission();
  if (granted) {
    await Geolocation.getCurrentPosition(
      position => {
        const location = [position.coords.longitude, position.coords.latitude];
        callback(location);
      },
      error => {
        alert(
          'Ви не надали доступ до додатка. Нам шкода, але так ви не зможете використовувати наш додаток'
        );
      },
      {
        enableHighAccuracy: true,
        showLocationDialog: true,
        timeout: 1000,
        maximumAge: 1000,
        distanceFilter: 5
      }
    );
  }
  // console.log(initialLocation);
};
