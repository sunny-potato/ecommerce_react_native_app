import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import {localImages} from '../data/localImages';
import ItemBox from '../components/ItemBox';
import OfferBox from '../components/OfferBox';
import OrganicBox from '../components/OrganicBox';
import {useApi} from '../data/api';
import {text, getStyleSheet} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppContext} from '../AppContext';

const HomeScreen = ({navigation}) => {
  const {data: allItems} = useApi('/items');
  // const [favoritesList, setFavoritesList] = useState();
  // const [backgroundMode, setBackgroundMode] = useState(true);
  // const [language, setLanguage] = useState(true);

  const {isLightTheme, isEnglishLanguage} = useAppContext();

  const externalStyle = getStyleSheet(isLightTheme);

  console.log(
    'pageSetting : background - ',
    isLightTheme,
    'language - ',
    isEnglishLanguage,
  );

  if (allItems === undefined) {
    return <Text>Loading...</Text>;
  }
  const dataByLanguage = isEnglishLanguage
    ? allItems.english
    : allItems.norwegian;

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <View style={styles.searchFilter}>
        <SearchBar
          data={allItems}
          navigation={navigation}
          language={isEnglishLanguage}
        />
        <Pressable
          onPress={() =>
            navigation.navigate('Filters', {
              allData: allItems,
              language: isEnglishLanguage,
              backgroundMode: isLightTheme,
            })
          }>
          <Image
            style={styles.filterIcon}
            source={require('../icons/filter.png')}
          />
        </Pressable>
      </View>
      <View style={[styles.displayItems, externalStyle.sectionContainer]}>
        <Text style={[styles.title, text.pageTitle, externalStyle.textColor]}>
          {isEnglishLanguage ? 'New items' : 'Nye varer'}
        </Text>
        <View style={styles.newItems}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dataByLanguage.map(i => {
              if (i.isnew) {
                return (
                  <ItemBox
                    key={i.id}
                    onPress={() =>
                      navigation.navigate('Item', {
                        id: i.id,
                        language: isEnglishLanguage,
                      })
                    }
                    image={localImages[i.id - 1]}
                    name={i.item}
                    type={i.type}
                    price={i.price}
                    unit={i.unit}
                    textColor={isLightTheme ? 'black' : '#f3f6f4'}
                    bgColor={isLightTheme ? 'white' : '#121212'}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
        <Text style={[styles.title, text.pageTitle, externalStyle.textColor]}>
          {isEnglishLanguage ? 'Sale items' : 'Tilbudsvarer'}
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dataByLanguage.map(i => {
              if (i.onsale) {
                return (
                  <OfferBox
                    key={i.id}
                    onPress={() =>
                      navigation.navigate('Item', {
                        id: i.id,
                        language: isEnglishLanguage,
                      })
                    }
                    image={localImages[i.id - 1]}
                    name={i.item}
                    type={i.type}
                    price={i.price}
                    unit={i.unit}
                    textColor={isLightTheme ? 'black' : '#f3f6f4'}
                    bgColor={isLightTheme ? 'white' : '#121212'}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
        <Text style={[styles.title, text.pageTitle, externalStyle.textColor]}>
          {isEnglishLanguage ? 'Oragnic items' : 'Økologiske varer'}
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dataByLanguage
              .slice(0)
              .reverse()
              .map(i => {
                if (i.isorganic) {
                  return (
                    <OrganicBox
                      key={i.id}
                      image={localImages[i.id - 1]}
                      onPress={() =>
                        navigation.navigate('Item', {
                          id: i.id,
                          language: isEnglishLanguage,
                        })
                      }
                    />
                  );
                }
              })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  searchFilter: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  filterIcon: {width: 30, height: 30, marginRight: 15},
  displayItems: {flex: 12, marginVertical: 10},
  newItems: {flexDirection: 'row'},
  title: {marginLeft: 10},
});
export default HomeScreen;
