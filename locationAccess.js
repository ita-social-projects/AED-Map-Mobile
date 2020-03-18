import {PermissionsAndroid} from 'react-native';

async function requestGeoLocationPermission() {
  try {
    let canUseGps = false;
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'We need to know your location to help you to find destination faster',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use location');
      canUseGps = true;
    } else {
      console.log('Location permission denied');
    }
    return canUseGps;
  } catch (err) {
    console.warn(err);
  }
}

export default requestGeoLocationPermission;
