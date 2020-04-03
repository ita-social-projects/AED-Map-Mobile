const destBetweenTwoPoints = (pointA, pointB) => {
  // Haversine_formula
  const R = 6378.137;
  let dLon = ((pointB[0] - pointA[0]) * Math.PI) / 180;
  let dLat = ((pointB[1] - pointA[1]) * Math.PI) / 180;
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((pointA[1] * Math.PI) / 180) *
      Math.cos((pointB[1] * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d * 1000; // meters
};
export default destBetweenTwoPoints;
