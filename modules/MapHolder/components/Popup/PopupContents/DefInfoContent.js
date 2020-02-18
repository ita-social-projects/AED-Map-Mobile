import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import getDefs from '../../../../../defs';

const DefInfoContent = ({id}) => {
  const [currentDef, setCurrentDef] = useState(null);

  useEffect(() => {
    setCurrentDef(null);
    const defs = getDefs();

    setTimeout(() => {
      const result = defs.filter(def => {
        return def._id === id;
      });
      setCurrentDef(result[0]);
    }, 400);
  }, [id]);

  return currentDef ? (
    <>
      <Text style={styles.popupText}>ID: {currentDef._id}</Text>
      <Text style={styles.popupText}>Title: {currentDef.title}</Text>
      <Text style={styles.popupText}>Address: {currentDef.address}</Text>
    </>
  ) : (
    <Text style={styles.popupText}>Loading...</Text>
  );
};

export default DefInfoContent;

const styles = StyleSheet.create({
  popupText: {
    fontSize: 21,
    color: '#fcfcfc'
  }
});
