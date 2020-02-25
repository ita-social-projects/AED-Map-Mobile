import http from './http';
import createDirReq from './createDirectionRequest';
import polyline from '@mapbox/polyline';

export default async (start, end, type) => {
  let geoData = [];
  try {
    const {data} = await http.get(createDirReq(start, end, type));
    geoData = polyline.toGeoJSON(data.routes[0].geometry);
  } catch (error) {
    console.log(error);
  }
  return geoData;
};
