import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {connect} from 'react-redux';
import {setUserLocation, setDirectionData} from '../../../../store/actions';
import destBetweenTwoPoints from '../../../../utils/destBetweenTwoPoints';
import getDirectionData from '../../../../getDirectionData';

const UserLocation = ({
  setMapParameters,
  userLocation,
  setUserLocation,
  destination,
  setDirectionData,
  directionData
}) => {
  const locationPress = () => {
    setMapParameters({
      coordinates: userLocation,
      zoom: 16
    });
  };
  const userLocationUpdate = async event => {
    let {coords} = event;
    coords = [coords.longitude, coords.latitude];
    if (coords[0] !== userLocation[0] && coords[1] !== userLocation[1]) {
      setUserLocation(coords);
      if (directionData.geoData && destination) {
        const distance = destBetweenTwoPoints(
          userLocation,
          directionData.geoData.coordinates[0]
        );
        if (distance > 10) {
          const {directionType, additionalStyle} = directionData;
          const geoData = await getDirectionData(
            userLocation,
            destination,
            directionType
          );
          setDirectionData({
            geoData,
            directionType: directionType,
            additionalStyle: additionalStyle
          });
        }
      }
    }
  };

  return (
    userLocation && (
      <MapboxGL.UserLocation
        onPress={locationPress}
        visible={true}
        onUpdate={userLocationUpdate}
      />
    )
  );
};
export default connect(
  state => ({
    userLocation: state.userLocation,
    destination: state.destination,
    directionData: state.directionData
  }),
  dispatch => ({
    setUserLocation: location => dispatch(setUserLocation(location)),
    setDirectionData: data => dispatch(setDirectionData(data))
  })
)(UserLocation);
