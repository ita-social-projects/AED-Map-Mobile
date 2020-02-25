import {fetchDefItems, fetchSingleItem} from '../api';
import {
  SET_DIRECTION_DATA,
  SET_ORIGIN,
  SET_POPUP_DATA,
  SET_USER_LOCATION,
  SET_DESTINATION,
  SET_MAP_PARAMETERS,
  START_LOAD_DATA,
  SUCCESS_LOAD_DATA,
  FAIL_LOAD_DATA
} from '../consts';

export const setDirectionData = directionData => {
  return {
    type: SET_DIRECTION_DATA,
    payload: directionData
  };
};

export const setOrigin = origin => {
  return {
    type: SET_ORIGIN,
    payload: origin
  };
};

export const setPopupData = popupData => {
  return {
    type: SET_POPUP_DATA,
    payload: popupData
  };
};

export const setUserLocation = userLocation => {
  return {
    type: SET_USER_LOCATION,
    payload: userLocation
  };
};

export const setDestination = destination => {
  return {
    type: SET_DESTINATION,
    payload: destination
  };
};
export const setMapParameters = map => {
  return {
    type: SET_MAP_PARAMETERS,
    payload: map
  };
};

export const startLoad = () => {
  return {
    type: START_LOAD_DATA
  };
};

export const successLoad = data => {
  return {
    type: SUCCESS_LOAD_DATA,
    payload: data
  };
};

export const failLoad = error => {
  return {
    type: FAIL_LOAD_DATA,
    payload: error
  };
};

export const fetchDefs = params => {
  return async dispatch => {
    dispatch(startLoad());
    try {
      const {data} = await fetchDefItems(params);
      const {defibrillators} = data;
      dispatch(successLoad(defibrillators));
    } catch (e) {
      dispatch(failLoad(e));
    }
  };
};
export const loadPopupData = params => {
  return async dispatch => {
    dispatch(startLoad());
    try {
      const {data} = await fetchSingleItem(params);
      const {defibrillator} = data;
      dispatch(setPopupData(defibrillator));
    } catch (e) {
      dispatch(failLoad(e));
    }
  };
};
