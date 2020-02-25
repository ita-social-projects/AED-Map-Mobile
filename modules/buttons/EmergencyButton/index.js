import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';
import {connect} from 'react-redux';
import {
  loadPopupData,
  setDestination,
  setOrigin,
  setMapParameters
} from '../../../store/actions';
const emergencySize = 125;

const EmergencyButton = ({
  userLocation,
  defsFeaturesData,
  setOrigin,
  setDestination,
  loadPopupData,
  setMapParameters
}) => {
  const [emergencyBleepWidth] = useState(new Animated.Value(emergencySize));
  const [emergencyOpacity] = useState(new Animated.Value(1));

  const emergencyPress = () => {
    const pointsAndPaths = defsFeaturesData.map(singleDef => {
      const xLength = Math.abs(
        userLocation[0] - singleDef.location.coordinates[0]
      );
      const yLength = Math.abs(
        userLocation[1] - singleDef.location.coordinates[1]
      );
      const pathLength = Math.sqrt(xLength * xLength + yLength * yLength);

      return {
        id: singleDef._id,
        coordinates: singleDef.location.coordinates,
        pathLength
      };
    });

    pointsAndPaths.sort((a, b) => {
      return a.pathLength > b.pathLength;
    });

    loadPopupData({
      id: pointsAndPaths[0].id
    });

    setOrigin(userLocation);

    setDestination(pointsAndPaths[0].coordinates);
    const {coordinates} = pointsAndPaths[0];

    setMapParameters({
      coordinates,
      zoom: 15
    });
  };

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(emergencyBleepWidth, {
            toValue: emergencySize,
            duration: 0
          }),
          Animated.timing(emergencyBleepWidth, {
            toValue: emergencySize * 1.3,
            duration: 1000
          })
        ]),
        Animated.sequence([
          Animated.timing(emergencyOpacity, {
            toValue: 0.5,
            duration: 0
          }),
          Animated.timing(emergencyOpacity, {
            toValue: 0,
            duration: 1000
          })
        ])
      ]),
      {
        iterations: -1
      }
    ).start();
  }, []);

  return (
    <View style={styles.emergencyButtonHolder}>
      <Animated.View
        style={{
          ...styles.emergencyBtnBleep,
          width: emergencyBleepWidth,
          height: emergencyBleepWidth,
          borderRadius: Animated.divide(emergencyBleepWidth, 2),
          opacity: emergencyOpacity,
          transform: [
            {
              translateX: Animated.divide(emergencyBleepWidth, -2)
            },
            {
              translateY: Animated.divide(emergencyBleepWidth, -2)
            }
          ]
        }}
      />

      <TouchableOpacity style={styles.emergencyButton} onPress={emergencyPress}>
        <Text style={styles.emButtonText}>
          {'Натисніть \nдля швидкого\n пошуку'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default connect(
  state => ({
    userLocation: state.userLocation,
    defsFeaturesData: state.featureCollection,
    mapParameters: state.mapParameters
  }),
  dispatch => ({
    loadPopupData: params => dispatch(loadPopupData(params)),
    setDestination: destination => dispatch(setDestination(destination)),
    setOrigin: origin => dispatch(setOrigin(origin)),
    setMapParameters: map => dispatch(setMapParameters(map))
  })
)(EmergencyButton);

const styles = StyleSheet.create({
  emergencyButtonHolder: {
    position: 'absolute',
    bottom: 50
  },
  emergencyButton: {
    backgroundColor: '#d00',
    width: emergencySize,
    height: emergencySize,
    borderRadius: emergencySize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  emergencyBtnBleep: {
    position: 'absolute',
    backgroundColor: '#900',
    top: '50%',
    left: '50%'
  },
  emButtonText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#fff'
  }
});
