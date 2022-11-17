import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import DisplayItems from '../components/DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import FilterScreen from './FilterScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.searchFilter}>
        <SearchBar />
        <Pressable onPress={() => navigation.navigate('Filter')}>
          <Image
            style={styles.filterIcon}
            source={require('../icons/filter.png')}
          />
        </Pressable>
      </View>
      <View style={styles.displayItems}>
        <DisplayItems />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    // backgroundColor: 'lightblue',
  },
  searchFilter: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  filterIcon: {width: 30, height: 30, marginRight: 15},
  displayItems: {flex: 12, backgroundColor: 'lightpink'},
});
export default HomeScreen;
