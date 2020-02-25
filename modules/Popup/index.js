import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';
import {connect} from 'react-redux';
import DefInfoContent from './PopupContents/DefInfoContent';
import {maxPopupYOffset, gotoPopupYOffset, maxYVelocity} from './consts';
import {setPopupData} from '../../store/actions';

const Popup = ({popupData, setPopupData}) => {
  const [popupValue] = useState(new Animated.Value(0));

  useEffect(() => {
    slidePopupWindow(20);
  }, [popupData]);

  const panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      popupValue.setOffset(popupValue._value);
      popupValue.setValue(0);
    },
    onPanResponderMove: (e, gestureState) => {
      const generalOffset = popupValue._value + popupValue._offset;
      let allowMoving = true;
      if (generalOffset < maxPopupYOffset || generalOffset > 0) {
        allowMoving = false;
      }
      Animated.event([null, {dy: allowMoving && popupValue}])(e, gestureState);
    },
    onPanResponderRelease: (e, {vy}) => {
      popupValue.flattenOffset();
      const generalOffset = popupValue._value + popupValue._offset;

      if (generalOffset > gotoPopupYOffset || vy > maxYVelocity) {
        setPopupData(null);
      } else if (generalOffset < gotoPopupYOffset) {
        slidePopupWindowToTop(20);
      }
    }
  });

  const slidePopupWindow = speed => {
    if (popupData) {
      Animated.spring(popupValue, {
        toValue: gotoPopupYOffset,
        speed
      }).start();
    } else {
      Animated.spring(popupValue, {
        toValue: 0,
        speed
      }).start();
    }
  };

  const slidePopupWindowToTop = speed => {
    if (popupData) {
      Animated.spring(popupValue, {
        toValue: maxPopupYOffset + 1,
        speed
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.popupOuter, {top: popupValue}]}>
      <Animated.View style={styles.popupHandle} {...panResponder.panHandlers}>
        <View style={styles.handleStick} />
      </Animated.View>
      {popupData && <DefInfoContent />}
    </Animated.View>
  );
};

export default connect(
  state => ({
    popupData: state.popupData
  }),
  dispatch => ({
    setPopupData: data => dispatch(setPopupData(data))
  })
)(Popup);

const styles = StyleSheet.create({
  popupOuter: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#282c34',
    borderTopColor: '#000'
  },
  popupHandle: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderTopColor: '#000'
  },
  handleStick: {
    backgroundColor: '#fff',
    width: 45,
    height: 2,
    alignSelf: 'center'
  }
});
