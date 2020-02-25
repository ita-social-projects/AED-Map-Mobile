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
const initialState = {
  directionData: {geoData: null},
  origin: null,
  popupData: null,
  userLocation: null,
  destination: null,
  mapParameters: {
    coordinates: [24.031610977781128, 49.84180396191118],
    zoom: 13
  },

  loading: false,
  error: null,
  featureCollection: []
};
const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case START_LOAD_DATA: {
      return {...state, loading: true};
    }
    case SUCCESS_LOAD_DATA: {
      return {...state, loading: false, featureCollection: payload};
    }
    case FAIL_LOAD_DATA: {
      return {...state, loading: false, error: payload};
    }
    case SET_DIRECTION_DATA: {
      return {...state, directionData: payload};
    }
    case SET_ORIGIN: {
      return {...state, origin: payload};
    }
    case SET_POPUP_DATA: {
      return {...state, popupData: payload};
    }
    case SET_USER_LOCATION: {
      return {...state, userLocation: payload};
    }
    case SET_DESTINATION: {
      return {...state, destination: payload};
    }
    case SET_MAP_PARAMETERS: {
      return {
        ...state,
        mapParameters: payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
