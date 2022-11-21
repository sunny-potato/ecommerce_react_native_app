import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import SearchBar from '../components/SearchBar';
import DisplayItems from '../components/DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import {text, backgroundColor} from '../style/Style';

const itemData = Data.items;

const ItemScreen = ({navigation, route}) => {
  const {id} = route.params;
  const currentItem = itemData[id - 1];
  //   console.log(currentItem);

  const extraInfo = () => {
    if (currentItem.onsale) {
      const originalPrice = (
        currentItem.price /
        (1 - currentItem.data.discount / 100)
      ).toFixed(0);
      // console.log(originalPrice);
      return (
        <View>
          <View style={extraStyles.extraInfoBox}>
            <Text style={text.small}>Sale period</Text>
            <Text style={text.medium}>{currentItem.data.period}</Text>
          </View>
          <View style={extraStyles.extraInfoBox}>
            <Text style={[text.small, {textDecorationLine: 'line-through'}]}>
              Original price {originalPrice}kr
            </Text>
            <Text style={text.medium}>{currentItem.data.discount}% OFF</Text>
          </View>
        </View>
      );
    }
  };
  // I want to add "tag info" ex) new, sale, organic, like
  return (
    <View style={[styles.pageContainer, backgroundColor.pageContainer]}>
      <Image style={styles.itemImage} source={localImages[id - 1]} />
      <View style={styles.itemInfo}>
        <View style={styles.nameImageBox}>
          <Text style={text.itemTitle}>{currentItem.item}</Text>
          <Pressable>
            <Image
              style={styles.likeIcon}
              source={require('../icons/heart.png')}
            />
          </Pressable>
        </View>
        <Text style={text.large}>Description </Text>
        <Text style={text.large}>{currentItem.description}</Text>
        {extraInfo()}
        <View style={styles.priceUnit}>
          <Text style={text.medium}>Price</Text>
          <Text style={[styles.itemPrice, text.pageTitle]}>
            {currentItem.price}kr
          </Text>
          <Text style={text.medium}>/{currentItem.unit}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  itemImage: {width: 400, height: 350, resizeMode: 'cover'},
  itemInfo: {padding: 20},
  nameImageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // itemName: {fontSize: 28, fontWeight: '900'},
  likeIcon: {width: 35, height: 35},
  // descriptionText: {fontSize: 18, fontWeight: '900'},
  // itemDescription: {fontSize: 18},
  priceUnit: {flexDirection: 'row'},
  itemPrice: {marginLeft: 'auto'},
  // itemUnit: {},
});

const extraStyles = StyleSheet.create({
  extraInfoBox: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ItemScreen;
