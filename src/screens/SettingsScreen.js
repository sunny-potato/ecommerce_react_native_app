import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingBox from '../components/SettingBox';
import {getStyleSheet} from '../style/Style';

const SettingsScreen = () => {
  const [isLight, setIsLight] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);
  const externalStyle = getStyleSheet(isLight);
  // const [backgroundMode, setBackgroundMode] = useState(true);
  // const [language, setLanguage] = useState(true);
  console.log('isLight', isLight);
  console.log('isEnlish', isEnglish);

  useEffect(() => {
    const saveBackgroundMode = async () => {
      try {
        if (isLight) {
          // setBackgroundMode(true);
          await AsyncStorage.setItem('backgroundMode', JSON.stringify(true));
        } else {
          // setBackgroundMode(false);
          await AsyncStorage.setItem('backgroundMode', JSON.stringify(false));
        }
      } catch (e) {
        console.error(e);
      }
      console.log(
        'background#####',
        await AsyncStorage.getItem('backgroundMode'),
      );
    };
    saveBackgroundMode();
  }, [isLight]);

  useEffect(() => {
    const saveLanguage = async () => {
      try {
        if (isEnglish) {
          await AsyncStorage.setItem('language', JSON.stringify(true));
        } else {
          await AsyncStorage.setItem('language', JSON.stringify(false));
        }
      } catch (e) {
        console.error(e);
      }
      console.log('language#####', await AsyncStorage.getItem('language'));
    };
    saveLanguage();
  }, [isEnglish]);

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const backgroundTheme = JSON.parse(
          await AsyncStorage.getItem('backgroundMode'),
        );
        setIsLight(backgroundTheme);
        const languageSetting = JSON.parse(
          await AsyncStorage.getItem('language'),
        );
        setIsEnglish(languageSetting);
        console.log(
          '--------------stored data : background - ',
          backgroundTheme,
          '---------------langugage - ',
          languageSetting,
        );
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
            title={isEnglish ? 'Background mode' : 'Bakgrunnsmodus'}
            choiceOne={isEnglish ? 'Light mode' : 'Lys modus'}
            choiceTwo={isEnglish ? 'Dark mode' : 'Mørk modus'}
            isChoiceOne={isLight}
            setIsChoiceOne={setIsLight}
            textColor={isLight ? 'black' : '#f3f6f4'}
            bgColor={isLight ? '#f3f6f4' : '#36384c'}
          />
        </View>
        <View style={styles.contentSection}>
          <SettingBox
            title={isEnglish ? 'Language' : 'Språk'}
            choiceOne={isEnglish ? 'English' : 'Engelsk'}
            choiceTwo={isEnglish ? 'Norwegian' : 'Norsk'}
            isChoiceOne={isEnglish}
            setIsChoiceOne={setIsEnglish}
            textColor={isLight ? 'black' : '#f3f6f4'}
            bgColor={isLight ? '#f3f6f4' : '#36384c'}
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
