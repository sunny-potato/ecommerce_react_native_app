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
      onPress={() => (isChekced ? setIsChecked(false) : setIsChecked(true))}>
      <Text style={{backgroundColor: 'lightyellow'}}>{buttonTitle}</Text>
    </Pressable>
  );
};

// const styles = StyleSheet.create({

// });

export default FilterButton;
