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
const FilterScreen = ({navigation}) => {
  const [checkedTypesList, setCheckedTypesList] = useState([]);
  const [checkedOriginsList, setCheckedOriginsList] = useState([]);
  const [isSaleClicked, setIsSaleClicked] = useState(false);
  const [isOrganicClicked, setIsOrganicClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);

  console.log(checkedTypesList);
  console.log(checkedOriginsList);
  console.log(isSaleClicked);
  console.log(isOrganicClicked);
  console.log(isNewClicked);

  return (
    <ScrollView horizontal={false}>
      <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Choose what you want</Text>
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
          <Text style={styles.filterButtonTitle}>Items are </Text>
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
          onPress={() => navigation.navigate('FilterResults')}>
          <Text style={styles.applyButton}>Apply filters</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1, alignItems: 'center'},
  pageTitle: {marginVertical: 10, fontSize: 20, fontWeight: '800'},
  filterDropdown: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  filterButtonContainer: {marginVertical: 10},
  filterButtonTitle: {fontSize: 18, fontWeight: '800', marginBottom: 5},
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
    fontSize: 18,
    fontWeight: '800',
    padding: 5,
  },
});
export default FilterScreen;
