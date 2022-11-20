import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import DisplayItems from '../components/DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import FilterDropdown from '../components/FilterDropdown';
import FilterButton from '../components/FilterButton';

const FilterResultsScreen = () => {
  // const {data: test} = useApi('/items');
  // console.log('TEST', test);

  // if (test === undefined) {
  //   return <Text>Loading...</Text>;
  // }
  return (
    <View>
      <Text>FilterResultsScreen</Text>
    </View>
  );
};

export default FilterResultsScreen;
