import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import FilterDropdown from '../components/FilterDropdown';
import FilterButton from '../components/FilterButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingBox from '../components/SettingBox';
import {text, backgroundColor} from '../style/Style';

const SettingsScreen = () => {
  // const languagesList = ['English', 'Norwegian'];
  const [isLight, setIsLight] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);
  const [backgroundMode, setBackgroundMode] = useState('white');

  const saveBackgroundMode = async () => {
    try {
      if (isLight) {
        setBackgroundMode('white');
        await AsyncStorage.setItem('backgroundMode', JSON.stringify('white'));
      } else {
        setBackgroundMode('lightgrey');
        await AsyncStorage.setItem(
          'backgroundMode',
          JSON.stringify('lightgrey'),
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    saveBackgroundMode();
  }, [backgroundMode]);

  return (
    <View style={[styles.pageContainer, backgroundColor.pageContainer]}>
      <View style={styles.contentContainer}>
        <View style={styles.contentSection}>
          <SettingBox
            title={'Background mode'}
            choiceOne={'Light mode'}
            choiceTwo={'Dark mode'}
            isChoiceOne={isLight}
            setIsChoiceOne={setIsLight}
          />
        </View>
        <View style={styles.contentSection}>
          <SettingBox
            title={'Language'}
            choiceOne={'English'}
            choiceTwo={'Norwegian'}
            isChoiceOne={isEnglish}
            setIsChoiceOne={setIsEnglish}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 20,
    width: 300,
    backgroundColor: 'pink',
  },
  // checkIcon: {width: 10, height: 10, marginLeft: 'auto'},
});

export default SettingsScreen;
