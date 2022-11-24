import React, {useState} from 'react';
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
// import AsyncStorage from '@react-native-async-storage/async-storage';

const FilterScreen = ({navigation, route}) => {
  const language = route.params.language;
  const allItems = language
    ? route.params.allData.english
    : route.params.allData.norwegian;
  const backgroundMode = route.params.backgroundMode;
  const typesList = language
    ? ['Vegetables', 'Fruits', 'Meats', 'Seafoods']
    : ['Grønnsaker', 'Frukt', 'Kjøtt', 'Sjømat'];
  const originsList = language
    ? [
        'Mexico',
        'Chile',
        'Spain',
        'Norway',
        'Italy',
        'Brasil',
        'New Zealand',
        'Germany',
      ]
    : [
        'Mexico',
        'Chile',
        'Spania',
        'Norge',
        'Italia',
        'Brasil',
        'New Zealand',
        'Tyskland',
      ];
  const [checkedTypesList, setCheckedTypesList] = useState(typesList);
  const [checkedOriginsList, setCheckedOriginsList] = useState(originsList);
  const [isSaleClicked, setIsSaleClicked] = useState(false);
  const [isOrganicClicked, setIsOrganicClicked] = useState(false);
  const [isNewClicked, setIsNewClicked] = useState(false);
  const externalStyle = getStyleSheet(backgroundMode);

  // console.log('typelist', checkedTypesList);
  // console.log('originlist', checkedOriginsList);

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

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <ScrollView horizontal={false}>
        <View style={styles.contentContainer}>
          <Text
            style={[styles.pageTitle, text.pageTitle, externalStyle.textColor]}>
            {language ? 'Choose what you want' : 'Velg hva du vil'}
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
            categoryTitle={language ? 'Country of origin' : 'Opprinnelsesland'}
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
            {language ? ' Items are' : 'Varer er '}
          </Text>
          <View style={styles.filterButton}>
            <FilterButton
              buttonTitle={language ? 'On sale ' : 'På salg'}
              isChecked={isSaleClicked}
              setIsChecked={setIsSaleClicked}
              textColor={backgroundMode ? 'black' : '#f3f6f4'}
              bgColor={backgroundMode ? '#f3f6f4' : '#36384c'}
            />
            <FilterButton
              buttonTitle={language ? 'Organic' : 'Økologisk'}
              isChecked={isOrganicClicked}
              setIsChecked={setIsOrganicClicked}
              textColor={backgroundMode ? 'black' : '#f3f6f4'}
            />
            <FilterButton
              buttonTitle={language ? 'New' : 'Ny'}
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
              language
                ? Alert.alert('No results found')
                : Alert.alert('Ingen resultater');
            } else {
              return navigation.navigate('FilterResults', {
                filteredData: filteredData,
                language: language,
                backgroundMode: backgroundMode,
              });
            }
          }}>
          <Text
            style={[styles.applyButton, text.large, externalStyle.textColor]}>
            {language ? 'Apply filters' : 'Bruke filtre'}
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
