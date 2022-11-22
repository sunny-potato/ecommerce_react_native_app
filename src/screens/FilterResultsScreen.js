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

import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import FilterDropdown from '../components/FilterDropdown';
import FilterButton from '../components/FilterButton';
import ResultBox from '../components/ResultBox';
import {text, backgroundColor} from '../style/Style';

const FilterResultsScreen = ({navigation, route}) => {
  const {filteredData} = route.params;

  return (
    <View style={[styles.pageContainer, backgroundColor.pageContainer]}>
      <ScrollView>
        <Text style={[styles.pageTitle, text.pageTitle]}>
          Results of filltering
        </Text>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {marginVertical: 20},
  displayItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
});

export default FilterResultsScreen;
