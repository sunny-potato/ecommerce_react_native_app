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

  return (
    <View>
      <ScrollView>
        <Text>{language ? 'Your favorites' : 'Dine favoritter'}</Text>
        {favoritesList !== undefined || favoritesList !== null ? (
          dataByLanguage
            .filter(i => favoritesList.some(each => each === i.id))
            .map(i => {
              return (
                <FavoritesBox
                  key={i.id}
                  image={localImages[i.id - 1]}
                  onPress={() => navigation.navigate('Item', {id: i.id})}
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
            })
        ) : language ? (
          <Text>No found favorites</Text>
        ) : (
          <Text>Finner ingen favoritter</Text>
        )}
      </ScrollView>
    </View>
  );
};
export default FavoritesScreen;
