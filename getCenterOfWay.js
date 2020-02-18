export default (pointA, pointB) => {
  const centerOfDistanceLang = (pointA[0] + pointB[0]) / 2;
  const centerOfDistanceLat = (pointA[1] + pointB[1]) / 2;

  return [centerOfDistanceLang, centerOfDistanceLat];
};
