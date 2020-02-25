import React, {useState} from 'react';
import {connect} from 'react-redux';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Popup from '../Popup';
import EmergencyButton from '../buttons/EmergencyButton';
import MoveTypes from '../buttons/MoveTypes';
import SetAsDestinationBtn from '../buttons/SetAsDestinationBtn';
import MapHolder from '../MapHolder';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA'
);

const MainHolder = ({popupData, destination, userLocation}) => {
  return (
    <>
      <MapHolder />

      {!destination && userLocation && <EmergencyButton />}

      {popupData && <Popup />}

      {destination && <MoveTypes />}

      {!destination && popupData && <SetAsDestinationBtn />}
    </>
  );
};

export default connect(state => ({
  popupData: state.popupData,
  destination: state.destination,
  userLocation: state.userLocation
}))(MainHolder);
