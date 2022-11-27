import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {localImages} from '../data/localImages';
import {useApi} from '../data/api';
import {text, getStyleSheet} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoritesBox from '../components/FavoritesBox';
import {tagInfo} from '../hooks/TagHandler';

const FavoritesScreen = ({navigation}) => {
  const {data: allItems} = useApi('/items');
  const [favoritesList, setFavoritesList] = useState();
  const [backgroundMode, setBackgroundMode] = useState(true);
  const [language, setLanguage] = useState(true);
  const externalStyle = getStyleSheet(backgroundMode);

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
        const languageSetting = JSON.parse(
          await AsyncStorage.getItem('language'),
        );
        setLanguage(languageSetting);
        console.log(
          'stored data : bacground - ',
          backgroundTheme,
          'language - ',
          languageSetting,
        );
      } catch (e) {
        console.error(e);
      }
    };
    getStoredData();
  }, []);

  if (allItems === undefined) {
    return <Text>Loading...</Text>;
  }
  const dataByLanguage = language ? allItems.english : allItems.norwegian;
  console.log(favoritesList.length === 0 ? 'ja' : 'nei');

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text
            style={[styles.pageTitle, text.pageTitle, externalStyle.textColor]}>
            {language ? 'Your favorites' : 'Dine favoritter'}
          </Text>
          {favoritesList !== undefined ||
            favoritesList !== null ||
            (favoritesList.length !== 0 &&
              dataByLanguage
                .filter(i => favoritesList.some(each => each === i.id))
                .map(i => {
                  return (
                    <FavoritesBox
                      key={i.id}
                      image={localImages[i.id - 1]}
                      onPress={() =>
                        navigation.navigate('Item', {
                          id: i.id,
                          language: language,
                        })
                      }
                      name={i.item}
                      type={i.type}
                      origin={i.origin}
                      price={i.price}
                      unit={i.unit}
                      tag={tagInfo(i, language, text, externalStyle)}
                      textColor={backgroundMode ? 'black' : '#f3f6f4'}
                      bgColor={backgroundMode ? 'white' : '#121212'}
                    />
                  );
                }))}
          {favoritesList === undefined ||
            favoritesList === null ||
            (favoritesList.length === 0 &&
              (language ? (
                <Text style={[text.medium, externalStyle.textColor]}>
                  No favorites
                </Text>
              ) : (
                <Text style={[text.medium, externalStyle.textColor]}>
                  Ingen favoritter
                </Text>
              )))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  contentContainer: {alignItems: 'center'},
  pageTitle: {marginVertical: 20},
  // infoMessage: {color: 'black'},
});
export default FavoritesScreen;
