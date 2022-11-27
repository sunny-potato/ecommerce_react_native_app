import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {localImages} from '../data/localImages';
import {text, getStyleSheet} from '../style/Style';
import FavoritesBox from '../components/FavoritesBox';
import {tagInfo} from '../hooks/TagHandler';
import {useAppContext} from '../AppContext';

const FavoritesScreen = ({navigation}) => {
  const {isLightTheme, isEnglishLanguage, favoritesList, allItems} =
    useAppContext();
  const externalStyle = getStyleSheet(isLightTheme);

  if (allItems === undefined) {
    return <Text>Loading...</Text>;
  }
  const dataByLanguage = isEnglishLanguage
    ? allItems.english
    : allItems.norwegian;

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text
            style={[styles.pageTitle, text.pageTitle, externalStyle.textColor]}>
            {isEnglishLanguage ? 'Your favorites' : 'Dine favoritter'}
          </Text>
          {favoritesList.length !== 0 &&
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
                      })
                    }
                    item={i}
                    tag={tagInfo(i, isEnglishLanguage, text, externalStyle)}
                    textColor={isLightTheme ? 'black' : '#f3f6f4'}
                    bgColor={isLightTheme ? 'white' : '#121212'}
                  />
                );
              })}
          {favoritesList.length === 0 &&
            (isEnglishLanguage ? (
              <Text style={[text.medium, externalStyle.textColor]}>
                No favorites
              </Text>
            ) : (
              <Text style={[text.medium, externalStyle.textColor]}>
                Ingen favoritter
              </Text>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  contentContainer: {alignItems: 'center'},
  pageTitle: {marginVertical: 20},
});
export default FavoritesScreen;
