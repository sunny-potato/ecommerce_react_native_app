import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import FilterDropdown from '../components/FilterDropdown';
import FilterButton from '../components/FilterButton';
import {text, backgroundColor} from '../style/Style';

const typesList = ['Vegetables', 'Fruits', 'Meats', 'Seafoods'];
const originsList = [
  'Mexico',
  'Chile',
  'Spain',
  'Norway',
  'Italy',
  'Brasil',
  'New Zealand',
  'Germany',
];
const FilterScreen = ({navigation, route}) => {
  const [checkedTypesList, setCheckedTypesList] = useState([
    'Vegetables',
    'Fruits',
    'Meats',
    'Seafoods',
  ]);
  const [checkedOriginsList, setCheckedOriginsList] = useState([
    'Mexico',
    'Chile',
    'Spain',
    'Norway',
    'Italy',
    'Brasil',
    'New Zealand',
    'Germany',
  ]);
  const [isSaleClicked, setIsSaleClicked] = useState(false);
  const [isOrganicClicked, setIsOrganicClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);
  const {allItems} = route.params;

  const filterQuery = (text, queryList) => {
    return queryList.some(query => {
      query = query.toLowerCase();
      return text.toLowerCase().includes(query);
    });
  };

  const filteredData = allItems.filter(item => {
    const typeQuery = filterQuery(item.type, checkedTypesList);
    const originQuery = filterQuery(item.origin, checkedOriginsList);
    const sale = isSaleClicked ? item.onsale === true : true;
    const organic = isOrganicClicked ? item.isorganic === true : true;
    const newItem = isNewClicked ? item.isnew === true : true;

    return typeQuery && originQuery && sale && organic && newItem;
  });

  return (
    <View style={[styles.pageContainer, backgroundColor.pageContainer]}>
      <ScrollView horizontal={false}>
        <Text style={[styles.pageTitle, text.pageTitle]}>
          Choose what you want
        </Text>
        <View style={styles.filterDropdown}>
          <FilterDropdown
            list={typesList}
            categoryTitle={'Type'}
            checkedList={checkedTypesList}
            setCheckedList={setCheckedTypesList}
          />
          <FilterDropdown
            list={originsList}
            categoryTitle={'Origin'}
            checkedList={checkedOriginsList}
            setCheckedList={setCheckedOriginsList}
          />
        </View>
        <View style={styles.filterButtonContainer}>
          <Text style={[styles.filterButtonText, text.large]}>Items are </Text>
          <View style={styles.filterButton}>
            <FilterButton
              buttonTitle={'on sale '}
              isChekced={isSaleClicked}
              setIsChecked={setIsSaleClicked}
            />
            <FilterButton
              buttonTitle={'organic'}
              isChekced={isOrganicClicked}
              setIsChecked={setIsOrganicClicked}
            />
            <FilterButton
              buttonTitle={'new'}
              isChekced={isNewClicked}
              setIsChecked={setIsNewClicked}
            />
          </View>
        </View>
        <Pressable
          style={styles.applyButtonContainer}
          onPress={() => {
            if (filteredData.length === 0) {
              return Alert.alert('No results found');
            } else {
              return navigation.navigate('FilterResults', {filteredData});
            }
          }}>
          <Text style={[styles.applyButton, text.large]}>Apply filters</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1, alignItems: 'center'},
  pageTitle: {marginVertical: 10},
  filterDropdown: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  filterButtonContainer: {marginVertical: 10},
  filterButtonText: {marginBottom: 5},
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: 250,
  },
  applyButtonContainer: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'lightblue',
    marginBottom: 30,
  },
  applyButton: {
    padding: 5,
  },
});
export default FilterScreen;
