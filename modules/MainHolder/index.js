import React, {useState} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Popup from '../Popup';
import getDefs from '../../defs';
import EmergencyButton from '../buttons/EmergencyButton';
import MoveTypes from '../buttons/MoveTypes';
import SetAsDestinationBtn from '../buttons/SetAsDestinationBtn';
import MapHolder from '../MapHolder';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib3Nrb3ZiYXNpdWsiLCJhIjoiY2s1NWVwcnhhMDhrazNmcGNvZjJ1MnA4OSJ9.56GsGp2cl6zpYh-Ns8ThxA'
);

const MainHolder = () => {
  const [mapParameters, setMapParameters] = useState({
    coordinates: [24.031610977781128, 49.84180396191118],
    zoom: 13
  });

  const [defsFeaturesData, setDefsFeaturesData] = useState(getDefs());
  const [userLocation, setUserLocation] = useState(null);
  const [popupData, setPopupData] = useState(false);
  const [directionData, setDirectionData] = useState({geoData: null});
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  return (
    <>
      <MapHolder
        setOrigin={setOrigin}
        setDestination={setDestination}
        destination={destination}
        userLocation={userLocation}
        setDirectionData={setDirectionData}
        directionData={directionData}
        setPopupData={setPopupData}
        popupData={popupData}
        setUserLocation={setUserLocation}
        mapParameters={mapParameters}
        setMapParameters={setMapParameters}
        defsFeaturesData={defsFeaturesData}
      />

      {!destination && userLocation && (
        <EmergencyButton
          userLocation={userLocation}
          defsFeaturesData={defsFeaturesData}
          setPopupData={setPopupData}
          setOrigin={setOrigin}
          setDestination={setDestination}
          setMapParameters={setMapParameters}
        />
      )}

      {popupData && <Popup popupData={popupData} setPopupData={setPopupData} />}

      {destination && (
        <MoveTypes
          setDirectionData={setDirectionData}
          origin={origin}
          destination={destination}
        />
      )}

      {!destination && popupData && (
        <SetAsDestinationBtn
          popupData={popupData}
          setDirectionData={setDirectionData}
          userLocation={userLocation}
          setOrigin={setOrigin}
          setDestination={setDestination}
          setMapParameters={setMapParameters}
        />
      )}
    </>
  );
};

export default MainHolder;
