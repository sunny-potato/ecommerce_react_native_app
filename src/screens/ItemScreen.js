import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import {text, backgroundColor} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const itemData = Data.items;

const ItemScreen = ({navigation, route}) => {
  const {id} = route.params;
  const currentItem = itemData[id - 1];
  const [isLiked, setIsliked] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  const getFavoritesList = async () => {
    try {
      const storedList = JSON.parse(await AsyncStorage.getItem('favoriteList'));
      setFavoritesList(storedList);
      if (storedList === null || storedList === undefined) {
        setIsliked(false);
      } else {
        const foundCurrentItem = storedList.find(storedId => storedId === id);
        if (foundCurrentItem) {
          setIsliked(true);
        } else {
          setIsliked(false);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFavoritesList('favoriteList');
  }, []);

  const likeHandler = likeSatus => {
    if (likeSatus) {
      const updatedList = favoritesList.filter(storedId => {
        return storedId !== id;
      });
      setFavoritesList(updatedList);
      saveFavoritesList(updatedList);
      setIsliked(false);
    } else {
      const addedList = [...favoritesList, ...[id]];
      console.log(addedList);
      setFavoritesList(addedList);
      saveFavoritesList(addedList);
      setIsliked(true);
    }
  };

  const saveFavoritesList = async value => {
    try {
      await AsyncStorage.setItem('favoriteList', JSON.stringify(value));
      console.log('setItem');
    } catch (e) {
      console.error(e);
    }
  };

  const extraInfo = () => {
    if (currentItem.onsale) {
      const originalPrice = (
        currentItem.price /
        (1 - currentItem.data.discount / 100)
      ).toFixed(0);
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
          <Pressable onPress={() => likeHandler(isLiked)}>
            {isLiked ? (
              <Image
                style={styles.likeIcon}
                source={require('../icons/redHeart.png')}
              />
            ) : (
              <Image
                style={styles.likeIcon}
                source={require('../icons/heart.png')}
              />
            )}
          </Pressable>
        </View>
        <Text style={text.large}>Description </Text>
        <Text style={text.medium}>{currentItem.description}</Text>
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
  likeIcon: {width: 35, height: 35},
  priceUnit: {flexDirection: 'row'},
  itemPrice: {marginLeft: 'auto'},
});

const extraStyles = StyleSheet.create({
  extraInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ItemScreen;
