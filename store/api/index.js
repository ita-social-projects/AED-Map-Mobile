import {Platform} from 'react-native';
import http from '../../http';

// for now, cause not all data on cloud.
// const baseURL = 'https://deffsserver.herokuapp.com/api/defibrillators';

const baseURL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3012/api/defibrillators'
    : 'http://localhost:3012/api/defibrillators';

export const fetchDefItems = params => {
  return http.get(`${baseURL}`, params);
};
export const fetchSingleItem = params => {
  return http.get(`${baseURL}/${params.id}`);
};
