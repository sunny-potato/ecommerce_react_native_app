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
import FavoriteBox from '../components/FavoriteBox';
import {useApi} from '../data/api';
import {text, getStyleSheet} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const {data: allItems} = useApi('/items');
  const [favoritesList, setFavoritesList] = useState();
  const [backgroundMode, setBackgroundMode] = useState(true);
  const externalStyle = getStyleSheet(backgroundMode);

  console.log('----', backgroundMode); // false -> dark

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const favorites = JSON.parse(
          await AsyncStorage.getItem('favoriteList'),
        );
        setFavoritesList(favorites);
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

  if (allItems === undefined) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <View style={styles.searchFilter}>
        <SearchBar data={allItems} navigation={navigation} />
        <Pressable onPress={() => navigation.navigate('Filters', {allItems})}>
          <Image
            style={styles.filterIcon}
            source={require('../icons/filter.png')}
          />
        </Pressable>
      </View>
      <View style={[styles.displayItems, externalStyle.sectionContainer]}>
        <Text style={[styles.title, text.pageTitle, externalStyle.textColor]}>
          New items
        </Text>
        <View style={styles.newItems}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {allItems.map(i => {
              if (i.isnew) {
                return (
                  <ItemBox
                    key={i.id}
                    onPress={() => navigation.navigate('Item', {id: i.id})}
                    image={localImages[i.id - 1]}
                    name={i.item}
                    type={i.type}
                    price={i.price}
                    unit={i.unit}
                    textColor={backgroundMode ? 'black' : '#f3f6f4'}
                    bgColor={backgroundMode ? 'white' : '#121212'}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
        <Text style={[styles.title, text.pageTitle, externalStyle.textColor]}>
          Offer items
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {allItems.map(i => {
              if (i.onsale) {
                return (
                  <OfferBox
                    key={i.id}
                    onPress={() => navigation.navigate('Item', {id: i.id})}
                    image={localImages[i.id - 1]}
                    name={i.item}
                    type={i.type}
                    price={i.price}
                    unit={i.unit}
                    textColor={backgroundMode ? 'black' : '#f3f6f4'}
                    bgColor={backgroundMode ? 'white' : '#121212'}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
        <Text style={[styles.title, text.pageTitle, externalStyle.textColor]}>
          Your favorites
        </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {favoritesList !== undefined || favoritesList !== null ? (
              allItems
                .filter(i => favoritesList.some(each => each === i.id))
                .map(i => {
                  return (
                    <FavoriteBox
                      key={i.id}
                      image={localImages[i.id - 1]}
                      onPress={() => navigation.navigate('Item', {id: i.id})}
                    />
                  );
                })
            ) : (
              <Text>No found favorites</Text>
            )}
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
