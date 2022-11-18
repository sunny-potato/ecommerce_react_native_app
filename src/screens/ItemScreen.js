import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import SearchBar from '../components/SearchBar';
import DisplayItems from '../components/DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';

const itemData = Data.items;

const ItemScreen = ({navigation, route}) => {
  const {id} = route.params;
  const currentItem = itemData[id - 1];
  //   console.log(currentItem);

  return (
    <View style={styles.pageContainer}>
      <Image style={styles.itemImage} source={localImages[id - 1]} />
      <View style={styles.itemInfo}>
        <View style={styles.nameImageBox}>
          <Text style={styles.itemName}>{currentItem.item}</Text>
          <Pressable>
            <Image
              style={styles.likeIcon}
              source={require('../icons/heart.png')}
            />
          </Pressable>
        </View>
        <Text style={styles.descriptionText}>Description </Text>
        <Text style={styles.itemDescription}>{currentItem.description}</Text>
        <View style={styles.priceUnit}>
          <Text>Price</Text>
          <Text style={styles.itemPrice}>{currentItem.price}kr</Text>
          <Text style={styles.itemUnit}>/{currentItem.unit}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1, backgroundColor: 'lightgreen'},
  itemImage: {height: 350},
  itemInfo: {padding: 20},
  nameImageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {fontSize: 28, fontWeight: '900'},
  likeIcon: {width: 35, height: 35},
  descriptionText: {fontSize: 18, fontWeight: '900'},
  itemDescription: {fontSize: 18},
  priceUnit: {flexDirection: 'row'},
  itemPrice: {marginLeft: 'auto', fontSize: 22, fontWeight: '500'},
  itemUnit: {},
});

export default ItemScreen;
