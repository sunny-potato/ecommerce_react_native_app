import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingBox from '../components/SettingBox';
import {getStyleSheet} from '../style/Style';

const SettingsScreen = () => {
  const [isLight, setIsLight] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);
  const [backgroundMode, setBackgroundMode] = useState(true);
  const externalStyle = getStyleSheet(backgroundMode);

  console.log('.......', backgroundMode);

  useEffect(() => {
    const saveBackgroundMode = async () => {
      try {
        if (isLight) {
          setBackgroundMode(true);
          await AsyncStorage.setItem('backgroundMode', JSON.stringify(true));
        } else {
          setBackgroundMode(false);
          await AsyncStorage.setItem('backgroundMode', JSON.stringify(false));
        }
      } catch (e) {
        console.error(e);
      }
      console.log('#####', await AsyncStorage.getItem('backgroundMode'));
    };
    saveBackgroundMode();
  }, [isLight]);

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const backgroundTheme = JSON.parse(
          await AsyncStorage.getItem('backgroundMode'),
        );
        console.log('.....................', backgroundTheme);
        // setBackgroundMode(backgroundTheme);
        setIsLight(backgroundTheme);
      } catch (e) {
        console.error(e);
      }
    };
    getStoredData();
  }, []);

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <View style={styles.contentContainer}>
        <View style={styles.contentSection}>
          <SettingBox
            title={'Background mode'}
            choiceOne={'Light mode'}
            choiceTwo={'Dark mode'}
            isChoiceOne={isLight}
            setIsChoiceOne={setIsLight}
            textColor={backgroundMode ? 'black' : '#f3f6f4'}
            bgColor={backgroundMode ? 'white' : '#36384c'}
          />
        </View>
        <View style={styles.contentSection}>
          <SettingBox
            title={'Language'}
            choiceOne={'English'}
            choiceTwo={'Norwegian'}
            isChoiceOne={isEnglish}
            setIsChoiceOne={setIsEnglish}
            textColor={backgroundMode ? 'black' : '#f3f6f4'}
            bgColor={backgroundMode ? 'white' : '#36384c'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 20,
    width: 300,
  },
});

export default SettingsScreen;
