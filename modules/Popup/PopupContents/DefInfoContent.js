import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import LoadingSpinner from '../../../shared/LoadingSpinner';

const DefInfoContent = ({currentDef}) => {
  return (
    <View style={styles.contentHolder}>
      {currentDef ? (
        <View style={styles.currentInfo}>
          <Text style={styles.popupText}>{currentDef.title}</Text>
          <Text style={styles.popupText}>{currentDef.address}</Text>
          {currentDef.additional_information ? (
            <Text style={styles.popupText}>
              {currentDef.additional_information}
            </Text>
          ) : null}
          {currentDef.phone ? (
            <Text style={styles.popupText}>
              {'Телефони: \n'}
              {currentDef.phone.map(singlePhone => {
                return singlePhone + '\n';
              })}
            </Text>
          ) : null}
        </View>
      ) : (
        <LoadingSpinner />
      )}
    </View>
  );
};

export default connect(state => ({
  currentDef: state.popupData
}))(DefInfoContent);

const styles = StyleSheet.create({
  popupText: {
    fontSize: 20,
    color: '#fcfcfc',
    borderColor: 'transparent',
    borderBottomColor: '#fff',
    borderWidth: 1,
    paddingBottom: 5,
    marginBottom: 5
  },
  contentHolder: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  currentInfo: {
    width: '100%',
    paddingHorizontal: 15
  }
});
