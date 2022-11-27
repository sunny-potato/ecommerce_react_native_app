import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {localImages} from '../data/localImages';
import {text, getStyleSheet} from '../style/Style';
import {tagInfo} from '../hooks/TagHandler';
import {saleInformation} from '../hooks/SaleInformation';
import {useAppContext} from '../AppContext';

const ItemScreen = ({route}) => {
  const {
    isLightTheme,
    isEnglishLanguage,
    favoritesList,
    updateFavoritesList,
    allItems,
  } = useAppContext();
  const externalStyle = getStyleSheet(isLightTheme);
  const dataByLanguage = isEnglishLanguage
    ? allItems.english
    : allItems.norwegian;
  const {id} = route.params;
  const currentItem = dataByLanguage[id - 1];
  const [isLiked, setIsliked] = useState(false);
  console.log({favoritesList});

  useEffect(() => {
    const getFavoritesList = async currentId => {
      try {
        if (favoritesList === null || favoritesList === undefined) {
          setIsliked(false);
        } else {
          const foundCurrentItem = favoritesList.find(
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

    getFavoritesList(id);
  }, [favoritesList, id]);

  const likeHandler = likeSatus => {
    if (likeSatus) {
      const updatedList = favoritesList.filter(storedId => {
        return storedId !== id;
      });
      updateFavoritesList(updatedList);
      setIsliked(false);
    } else {
      const addedList = [...favoritesList, ...[id]];
      updateFavoritesList(addedList);
      setIsliked(true);
    }
  };

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
          {tagInfo(currentItem, isEnglishLanguage, text, externalStyle)}
          <Text
            style={[styles.description, text.medium, externalStyle.textColor]}>
            {currentItem.description}
          </Text>
          {saleInformation(currentItem, isEnglishLanguage, text, externalStyle)}
          <View style={styles.priceUnit}>
            <Text style={[text.large, externalStyle.textColor]}>
              {isEnglishLanguage ? 'Price' : 'Pris'}
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

export default ItemScreen;
