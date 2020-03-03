import createDirReq from './createDirectionRequest';
import polyline from '@mapbox/polyline';

export default async (start, end, type) => {
  console.log(type);
  let geoData = [];
  try {
    const res = await fetch(createDirReq(start, end, type));
    const data = await res.json();
    geoData = polyline.toGeoJSON(data.routes[0].geometry);
  } catch (error) {
    console.log(error);
  }
  return geoData;
};
