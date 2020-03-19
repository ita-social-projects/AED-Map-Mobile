import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
  Linking
} from 'react-native';
import {connect} from 'react-redux';
import LoadingSpinner from '../../../shared/LoadingSpinner';
import {fetchSingleItem} from '../../../store/api';
import {setPopupData, setMapParameters} from '../../../store/actions';
import {nearestDefsSelector} from '../../../store/reducer';
import getFromMocks from '../../../store/api/getFromMocks';

const DefInfoContent = ({
  popupData,
  setPopupData,
  setMapParameters,
  featureCollection,
  userLocation
}) => {
  const [currentDef, setCurrentDef] = useState({});
  useEffect(() => {
    const getPopupData = async () => {
      let defibrillator = {};
      if (getFromMocks) {
        defibrillator = require('../../../mocks/FullDefs.json').data.listDefs.find(
          element => element._id === popupData.id
        );
      } else {
        defibrillator = await fetchSingleItem({id: popupData.id}).defibrillator;
      }

      setCurrentDef(defibrillator);
    };
    getPopupData();
  }, [popupData.id]);

  const [counter, setCounter] = useState(1);

  const makePhoneCall = phoneNumber => {
    let phoneNum = '';
    if (Platform.OS === 'android') {
      phoneNum = `tel:${phoneNumber}`;
    } else {
      phoneNum = `telprompt:${phoneNumber}`;
    }
    Linking.openURL(phoneNum);
    setPopupData(null);
  };

  const findNext = () => {
    const nearbyDefs = nearestDefsSelector({featureCollection, userLocation});
    setCounter(count => count + 1);
    if (counter >= nearbyDefs.length - 1) {
      setCounter(0);
    }
    const near = nearbyDefs[counter];
    setPopupData({id: near.id});
    setMapParameters({
      coordinates: near.coordinates,
      zoom: 15
    });
  };

  const phoneRenders =
    currentDef.phone &&
    currentDef.phone.map(singlePhone => {
      return (
        <TouchableOpacity key={singlePhone} style={styles.phone}>
          <Button
            color="gray"
            key={singlePhone}
            title={singlePhone}
            onPress={() => makePhoneCall(singlePhone)}
          />
        </TouchableOpacity>
      );
    });

  return (
    <View style={styles.contentHolder}>
      {currentDef ? (
        <ScrollView style={styles.currentInfo}>
          <TouchableOpacity style={styles.nextBtn} onPress={findNext}>
            <Text>Знайти наступний дефібрилятор</Text>
          </TouchableOpacity>

          <View style={styles.title}>
            <Text style={styles.popupText}>{currentDef.title}</Text>
          </View>
          <Text style={styles.popupText}>{currentDef.address}</Text>
          {currentDef.additional_information ? (
            <Text style={styles.popupText}>
              {currentDef.additional_information}
            </Text>
          ) : null}
          {currentDef.phone ? (
            <>
              <Text style={styles.popupText}>Телефони:</Text>
              {phoneRenders}
            </>
          ) : null}
        </ScrollView>
      ) : (
        <LoadingSpinner />
      )}
    </View>
  );
};

export default connect(
  state => ({
    popupData: state.popupData,
    featureCollection: state.featureCollection,
    userLocation: state.userLocation
  }),
  dispatch => ({
    setPopupData: data => dispatch(setPopupData(data)),
    setMapParameters: map => dispatch(setMapParameters(map))
  })
)(DefInfoContent);

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
  nextBtn: {
    alignItems: 'center',
    backgroundColor: '#ffddcc',
    padding: 5,
    marginVertical: 5
  },
  phone: {
    marginVertical: 10
  },
  contentHolder: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 15
  },
  currentInfo: {
    width: '100%',
    maxHeight: 400,
    paddingHorizontal: 15
  }
});
