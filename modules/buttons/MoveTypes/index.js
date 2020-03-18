import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image
} from 'react-native';
import getDirectionData from '../../../getDirectionData';
import {additionalStyle} from './consts';

const MoveTypes = ({setDirectionData, origin, destination, setDestination}) => {
  const [directionValue] = useState(new Animated.ValueXY({x: -160, y: 0}));
  const [directionType, setDirectionType] = useState(null);
  useEffect(() => {
    if (directionType) {
      displayWayBasedOnType();
    }
  }, [directionType]);

  useEffect(() => {
    slideDirectionWindow();
  }, [destination]);

  const displayWayBasedOnType = async () => {
    if (destination) {
      const geoData = await getDirectionData(
        origin,
        destination,
        directionType
      );
      setDirectionData({
        geoData,
        directionType,
        additionalStyle: additionalStyle[directionType]
      });
    }
  };

  const slideDirectionWindow = () => {
    if (destination) {
      Animated.spring(directionValue, {
        toValue: {x: 0, y: 0},
        speed: 15
      }).start();
    } else {
      Animated.spring(directionValue, {
        toValue: {x: -160, y: 0},
        speed: 15
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.driveTypes, directionValue.getLayout()]}>
      <TouchableOpacity
        onPress={() => {
          setDirectionType('driving');
        }}
      >
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../../content/images/directions_car.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setDirectionType('cycling');
        }}
      >
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../../content/images/directions_bicycle.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setDirectionType('walking');
        }}
      >
        <View style={styles.driveTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../../content/images/directions_pedestrian.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setDestination(null);
          setDirectionData({
            geoData: null
          });
        }}
      >
        <View style={styles.closeTypeButton}>
          <Image
            style={styles.driveImg}
            source={require('../../../content/images/close_cross.png')}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default connect(
  state => ({origin: state.origin, destination: state.destination}),
  dispatch => ({
    setDirectionData: data => dispatch(setDirectionData(data))
  })
)(MoveTypes);

const styles = StyleSheet.create({
  driveTypes: {
    padding: 10,
    backgroundColor: '#282c34',
    position: 'absolute',
    left: -200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200
  },
  driveTypeButton: {
    width: 40,
    height: 40,
    padding: 3,
    textAlign: 'center'
  },
  closeTypeButton: {
    width: 40,
    height: 40,
    padding: 5,
    textAlign: 'center'
  },
  driveImg: {
    width: '100%',
    height: '100%',
    tintColor: '#fff'
  }
});
