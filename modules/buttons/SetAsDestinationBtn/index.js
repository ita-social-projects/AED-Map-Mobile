import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  setDirectionData,
  setOrigin,
  setDestination
} from '../../../store/actions';

const SetAsDestinationBtn = ({
  popupData,
  setDirectionData,
  userLocation,
  setOrigin,
  setDestination
}) => {
  const setAsDestination = () => {
    const {coordinates} = popupData;
    setDirectionData({geoData: null});
    setOrigin(userLocation);
    setDestination(coordinates);
  };

  return (
    <View style={styles.destHolder}>
      <TouchableOpacity onPress={setAsDestination}>
        <Text style={styles.destBtn}>Встановити кінцеву точку</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(
  state => ({userLocation: state.userLocation, popupData: state.popupData}),
  dispatch => ({
    setDirectionData: data => dispatch(setDirectionData(data)),
    setOrigin: origin => dispatch(setOrigin(origin)),
    setDestination: destination => dispatch(setDestination(destination))
  })
)(SetAsDestinationBtn);

const styles = StyleSheet.create({
  destBtn: {
    color: '#fcfcfc',
    lineHeight: 25,
    fontSize: 16
  },
  destHolder: {
    position: 'absolute',
    top: 30,
    right: 0,
    padding: 10,
    backgroundColor: '#282c34'
  }
});
