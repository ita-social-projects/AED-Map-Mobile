import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import DefInfoContent from './PopupContents/DefInfoContent';

const Popup = ({popupData}) => {
  const [popupValue] = useState(new Animated.ValueXY({x: 0, y: 0}));
  useEffect(() => {
    slidePopupWindow();
  }, [popupData]);

  const slidePopupWindow = () => {
    if (popupData) {
      Animated.spring(popupValue, {
        toValue: {x: 0, y: -300},
        speed: 15
      }).start();
    } else {
      Animated.spring(popupValue, {
        toValue: {x: 0, y: 0},
        speed: 15
      }).start();
    }
  };
  return (
    <Animated.View style={[styles.popupOuter, popupValue.getLayout()]}>
      <View style={styles.popupHandle} />
      {popupData && <DefInfoContent id={popupData.id} />}
    </Animated.View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  popupOuter: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#282c34',
    borderWidth: 1,
    borderTopColor: '#000',
    padding: 10
  },
  popupHandle: {
    backgroundColor: '#fff',
    width: 30,
    height: 2,
    alignSelf: 'center',
    marginVertical: 10
  },
  popupText: {
    fontSize: 21,
    color: '#fcfcfc'
  }
});
