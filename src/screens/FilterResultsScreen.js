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
import ResultBox from '../components/ResultBox';

const FilterResultsScreen = ({navigation, route}) => {
  const {filteredData} = route.params;

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Results of filltering</Text>
        <View style={styles.displayItemsContainer}>
          {filteredData.map(i => {
            return (
              <ResultBox
                key={i.id}
                onPress={() => navigation.navigate('Item', {id: i.id})}
                image={localImages[i.id - 1]}
                name={i.item}
                type={i.type}
                price={i.price}
                unit={i.unit}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {fontSize: 22, fontWeight: '800', marginVertical: 20},
  displayItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
});

export default FilterResultsScreen;
