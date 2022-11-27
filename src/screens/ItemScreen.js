import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';
import {text, getStyleSheet} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tagInfo} from '../hooks/TagHandler';
import {saleInformation} from '../hooks/SaleInformation';

const ItemScreen = ({route}) => {
  const {id} = route.params;
  const {language} = route.params;
  const itemData = language ? Data.items.english : Data.items.norwegian;
  const currentItem = itemData[id - 1];
  const [isLiked, setIsliked] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);
  const [backgroundMode, setBackgroundMode] = useState(true);
  const externalStyle = getStyleSheet(backgroundMode);
  console.log('backgroundmode', backgroundMode);

  useEffect(() => {
    const getFavoritesList = async (key, currentId) => {
      try {
        const storedList = JSON.parse(await AsyncStorage.getItem(key));
        setFavoritesList(storedList);
        if (storedList === null || storedList === undefined) {
          setIsliked(false);
        } else {
          const foundCurrentItem = storedList.find(
            storedId => storedId === currentId,
          );
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

    const getBackgroundMode = async key => {
      try {
        const backgroundTheme = JSON.parse(await AsyncStorage.getItem(key));
        setBackgroundMode(backgroundTheme);
      } catch (e) {
        console.error(e);
      }
    };
    getBackgroundMode('backgroundMode');
    getFavoritesList('favoriteList', id);
  }, [id]);

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
      // console.log('setItem');
    } catch (e) {
      console.error(e);
    }
  };

  // const saleInformation = () => {
  //   if (currentItem.onsale) {
  //     const originalPrice = (
  //       currentItem.price /
  //       (1 - currentItem.data.discount / 100)
  //     ).toFixed(0);

  //     return (
  //       <View>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <Text style={[text.small, externalStyle.textColor]}>
  //             {language ? 'Sale until' : 'Tilbud t.o.m'}
  //           </Text>
  //           <Text style={[text.medium, externalStyle.textColor]}>
  //             {currentItem.data.period}
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //           }}>
  //           <Text
  //             style={[
  //               text.small,
  //               {textDecorationLine: 'line-through'},
  //               externalStyle.textColor,
  //             ]}>
  //             {language
  //               ? `Original price ${originalPrice}kr`
  //               : `Original pris ${originalPrice}kr`}
  //           </Text>
  //           <Text style={[text.small, externalStyle.textColor]}>
  //             {currentItem.data.discount}% OFF
  //           </Text>
  //         </View>
  //       </View>
  //     );
  //   }
  // };
  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <ScrollView>
        <Image style={styles.itemImage} source={localImages[id - 1]} />
        <View style={styles.itemInfo}>
          <View style={styles.nameImageBox}>
            <Text style={[text.itemTitle, externalStyle.textColor]}>
              {currentItem.item}
            </Text>
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
          {tagInfo(currentItem, language, text, externalStyle)}
          <Text
            style={[styles.description, text.medium, externalStyle.textColor]}>
            {currentItem.description}
          </Text>
          {saleInformation(currentItem, language, text, externalStyle)}
          <View style={styles.priceUnit}>
            <Text style={[text.large, externalStyle.textColor]}>
              {language ? 'Price' : 'Pris'}
            </Text>
            <Text
              style={[
                styles.itemPrice,
                text.pageTitle,
                externalStyle.textColor,
              ]}>
              {currentItem.price}kr
            </Text>
            <Text style={[text.small, externalStyle.textColor]}>
              {' '}
              /{currentItem.unit}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  itemImage: {width: 400, height: 350, resizeMode: 'contain'},
  itemInfo: {padding: 20},
  nameImageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeIcon: {width: 35, height: 35},
  tagInfo: {flexDirection: 'row'},
  description: {marginVertical: 10},
  priceUnit: {flexDirection: 'row', alignItems: 'center'},
  itemPrice: {marginLeft: 'auto'},
});

// const extraStyles = StyleSheet.create({
//   extraInfoBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

export default ItemScreen;
