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
import DisplayItems from '../components/DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import FilterScreen from './FilterScreen';
import ItemBox from '../components/ItemBox';
import OfferBox from '../components/offerBox';

const itemData = Data.items;

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.searchFilter}>
        <SearchBar />
        <Pressable onPress={() => navigation.navigate('Filter')}>
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
            {itemData.map(i => {
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
        <Text style={styles.title}>Today's offer</Text>
        <View style={{backgroundColor: 'lightgray'}}>
          <OfferBox
            image={require('../icons/heart.png')}
            name={'name'}
            type={'type'}
            price={'price'}
            unit={'unit'}
            onPress={() => console.log('hei')}
          />
        </View>

        <Text style={styles.title}>Your favorite</Text>
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
