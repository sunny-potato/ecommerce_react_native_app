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
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  return (
    <View>
      <View>
        <Text>Language</Text>
        <Text>LanguageSelect</Text>
      </View>
      <View>
        <Text>Theme</Text>
        <Text>ColorPicker</Text>
      </View>
      <View>
        <Text>Language</Text>
        <Text>LanguageSelect</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
