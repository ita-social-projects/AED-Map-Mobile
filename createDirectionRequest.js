const createDirectionRequest = (origin, remote, travelType) => {
  return `https://api.mapbox.com/directions/v5/mapbox/${travelType}/${origin};${remote}?access_token=pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA`;
};

export default createDirectionRequest;
