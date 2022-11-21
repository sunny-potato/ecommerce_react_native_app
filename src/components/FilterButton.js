import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Button,
} from 'react-native';
import SearchBar from './SearchBar';
import DisplayItems from './DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';

const FilterButton = ({buttonTitle, isChekced, setIsChecked}) => {
  return (
    <Pressable
      style={{
        borderRadius: 10,
        backgroundColor: isChekced ? 'lightpink' : 'lightblue',
      }}
      onPress={() => (isChekced ? setIsChecked(false) : setIsChecked(true))}>
      <Text style={styles.titleText}>{buttonTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // buttonBox: {},
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    padding: 3,
    // borderWidth: 1,
  },
});

export default FilterButton;
