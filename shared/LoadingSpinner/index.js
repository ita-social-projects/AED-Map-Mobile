import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Easing} from 'react-native';

const LoadingSpinner = () => {
  const [spinValue] = useState(new Animated.Value(0));

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 0,
          duration: 0
        }),
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 600,
          easing: Easing.elastic(0.1)
        })
      ]),
      {
        iterations: -1
      }
    ).start();
  });

  return (
    <Animated.View
      style={{
        ...styles.spinner,
        transform: [{rotate: spin}]
      }}
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    width: 60,
    height: 60,
    borderRadius: 35,
    borderWidth: 3,
    borderTopColor: '#fff',
    borderBottomColor: '#fff'
  }
});

export default LoadingSpinner;
