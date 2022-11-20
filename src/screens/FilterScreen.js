import React, {useState} from 'react';
import {
  SafeAreaView,
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
  // console.log(
  //   'sale : ',
  //   isSaleClicked,
  //   'organic : ',
  //   isOrganicClicked,
  //   'new : ',
  //   isNewClicked,
  // );
  // const {data, getData} = useApi('/items');
  // console.log(data);

  // if (data === undefined) {
  //   return <Text>Loading...</Text>;
  // }
  return (
    <View>
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
      <View style={styles.filterButton}>
        <FilterButton
          buttonTitle={'Sale'}
          isChekced={isSaleClicked}
          setIsChecked={setIsSaleClicked}
        />
        <FilterButton
          buttonTitle={'Organic'}
          isChekced={isOrganicClicked}
          setIsChecked={setIsOrganicClicked}
        />
        <FilterButton
          buttonTitle={'New'}
          isChekced={isNewClicked}
          setIsChecked={setIsNewClicked}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterDropdown: {flexDirection: 'column'},
  filterButton: {flexDirection: 'row', justifyContent: 'space-evenly'},
});
export default FilterScreen;
