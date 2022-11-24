import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {localImages} from '../data/localImages';
import ResultBox from '../components/ResultBox';
import {text, getStyleSheet} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FilterResultsScreen = ({navigation, route}) => {
  const {filteredData} = route.params;
  const [backgroundMode, setBackgroundMode] = useState(true);
  const externalStyle = getStyleSheet(backgroundMode);

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const backgroundTheme = JSON.parse(
          await AsyncStorage.getItem('backgroundMode'),
        );
        setBackgroundMode(backgroundTheme);
      } catch (e) {
        console.error(e);
      }
    };
    getStoredData();
  }, []);

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text
            style={[styles.pageTitle, text.pageTitle, externalStyle.textColor]}>
            Filter results
          </Text>
        </View>
        <View style={styles.displayItemsContainer}>
          {filteredData.map(i => {
            return (
              <ResultBox
                key={i.id}
                onPress={() => navigation.navigate('Item', {id: i.id})}
                image={localImages[i.id - 1]}
                name={i.item}
                type={i.type}
                price={i.price}
                unit={i.unit}
                textColor={backgroundMode ? 'black' : '#f3f6f4'}
                bgColor={backgroundMode ? 'white' : '#121212'}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {alignItems: 'center'},
  pageTitle: {marginVertical: 20},
  displayItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
});

export default FilterResultsScreen;
