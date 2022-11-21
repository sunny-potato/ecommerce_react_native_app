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
// import ColorPicker from 'react-native-wheel-color-picker';
import {text, backgroundColor} from '../style/Style';

const SettingsScreen = () => {
  const languagesList = ['English', 'Norwegian'];
  // const [backgroundColor, setBackgroundColor] = useState();

  // const handlerColorChange = async color => {
  //   try {
  //     await AsyncStorage.setItem('backgroundColor', color);
  //   } catch (e) {
  //     console.error('colorPicker error : ', e);
  //   }
  // };
  return (
    <View style={[styles.pageContainer, backgroundColor.pageContainer]}>
      <View style={styles.contentContainer}>
        <View style={styles.contentSection}>
          <Text style={[styles.titleText, text.large]}>Background color</Text>
          <View style={styles.choiceSelction}>
            <Pressable>
              <Text style={[styles.choiceText, text.medium]}>Light mode</Text>
            </Pressable>
            <Pressable>
              <Text style={[styles.choiceText, text.medium]}>Dark mode</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.contentSection}>
          <Text style={[styles.titleText, text.large]}>Language</Text>
          <View style={styles.choiceSelction}>
            <Pressable>
              <Text style={[styles.choiceText, text.medium]}>English</Text>
            </Pressable>
            <Pressable>
              <Text style={[styles.choiceText, text.medium]}>Norwegian</Text>
            </Pressable>
          </View>
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
  contentSection: {
    // borderWidth: 3,
  },
  titleText: {
    padding: 10,
  },
  choiceSelction: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  choiceText: {
    padding: 10,
    backgroundColor: 'orange',
  },
  checkIcon: {width: 10, height: 10, marginLeft: 'auto'},
});

export default SettingsScreen;
