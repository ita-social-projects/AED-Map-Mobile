import http from '../../http';
import {Platform} from 'react-native';

const baseURL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3012' : 'http://localhost:3012';

const url = 'api/defibrillators';

export const fetchDefItems = params => {
  return http.get(`${baseURL}/${url}`, params);
};
export const fetchSingleItem = params => {
  return http.get(`${baseURL}/${url}/${params.id}`);
};
