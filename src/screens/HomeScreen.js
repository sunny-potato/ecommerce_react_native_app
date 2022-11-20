import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
// import DisplayItems from '../components/DisplayItems';
import {localImages} from '../data/localImages';
import FilterScreen from './FilterScreen';
import ItemBox from '../components/ItemBox';
import OfferBox from '../components/OfferBox';
import FavoritBox from '../components/FavoritBox';
import {useApi} from '../data/api';

const HomeScreen = ({navigation}) => {
  const {data: allItems} = useApi('/items');
  // console.log('TEST', allItems);

  if (allItems === undefined) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.pageContainer}>
      <View style={styles.searchFilter}>
        <SearchBar
          data={allItems}
          navigation={navigation}
          // onPress={() => navigation.navigate('Item', {id: i.id})}
        />
        <Pressable onPress={() => navigation.navigate('Filters', {allItems})}>
          <Image
            style={styles.filterIcon}
            source={require('../icons/filter.png')}
          />
        </Pressable>
      </View>
      <View style={styles.displayItems}>
        <Text style={styles.title}>New items</Text>
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
                  />
                );
              }
            })}
          </ScrollView>
        </View>
        <Text style={styles.title}>Offer items</Text>
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
                  />
                );
              }
            })}
          </ScrollView>
        </View>
        <Text style={styles.title}>Your favorite</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FavoritBox />
            <FavoritBox />
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
  displayItems: {flex: 12, backgroundColor: 'lightpink', marginVertical: 10},
  newItems: {flexDirection: 'row'},
  title: {fontSize: 22, fontWeight: '900', marginLeft: 10},
});
export default HomeScreen;
