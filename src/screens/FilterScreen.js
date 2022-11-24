import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import FilterDropdown from '../components/FilterDropdown';
import FilterButton from '../components/FilterButton';
import {text, getStyleSheet} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const {allItems} = route.params;
  const [isSaleClicked, setIsSaleClicked] = useState(false);
  const [isOrganicClicked, setIsOrganicClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState(true);
  const externalStyle = getStyleSheet(backgroundMode);

  const filterQuery = (textContent, queryList) => {
    return queryList.some(query => {
      query = query.toLowerCase();
      return textContent.toLowerCase().includes(query);
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

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const backgroundTheme = JSON.parse(
          await AsyncStorage.getItem('backgroundMode'),
        );
        setBackgroundMode(backgroundTheme);
      } catch (e) {
        console.error(e);
      }
    };
    getStoredData();
  }, []);

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <ScrollView horizontal={false}>
        <View style={styles.contentContainer}>
          <Text
            style={[styles.pageTitle, text.pageTitle, externalStyle.textColor]}>
            Choose what you want
          </Text>
        </View>
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
          <Text
            style={[
              styles.filterButtonText,
              text.large,
              externalStyle.textColor,
            ]}>
            Items are{' '}
          </Text>
          <View style={styles.filterButton}>
            <FilterButton
              buttonTitle={'on sale '}
              isChecked={isSaleClicked}
              setIsChecked={setIsSaleClicked}
              textColor={backgroundMode ? 'black' : '#f3f6f4'}
              bgColor={backgroundMode ? '#f3f6f4' : '#36384c'}
            />
            <FilterButton
              buttonTitle={'organic'}
              isChecked={isOrganicClicked}
              setIsChecked={setIsOrganicClicked}
              textColor={backgroundMode ? 'black' : '#f3f6f4'}
            />
            <FilterButton
              buttonTitle={'new'}
              isChecked={isNewClicked}
              setIsChecked={setIsNewClicked}
              textColor={backgroundMode ? 'black' : '#f3f6f4'}
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
          <Text
            style={[styles.applyButton, text.large, externalStyle.textColor]}>
            Apply filters
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1, alignItems: 'center'},
  contentContainer: {alignItems: 'center'},
  pageTitle: {marginVertical: 20},
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
    backgroundColor: '#f26d52',
    marginBottom: 30,
  },
  applyButton: {
    padding: 5,
  },
});
export default FilterScreen;
