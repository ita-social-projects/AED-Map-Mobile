import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';

const SetAsDestinationBtn = ({
  popupData,
  setDirectionData,
  userLocation,
  setOrigin,
  setDestination,
  setMapParameters
}) => {
  const setAsDestination = () => {
    const {coordinates} = popupData;
    setDirectionData({geoData: null});
    setOrigin(userLocation);
    setDestination(popupData.coordinates);
    setMapParameters({
      coordinates,
      zoom: 13
    });
  };

  return (
    <View style={styles.destHolder}>
      <TouchableOpacity onPress={setAsDestination}>
        <Text style={styles.destBtn}>Встановити кінцеву точку</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetAsDestinationBtn;

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
