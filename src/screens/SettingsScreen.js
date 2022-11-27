import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingBox from '../components/SettingBox';
import {getStyleSheet} from '../style/Style';
import {useAppContext} from '../AppContext';

const SettingsScreen = () => {
  // const [isLight, setIsLight] = useState(true);
  // const [isEnglish, setIsEnglish] = useState(true);

  console.log('rendering settings screen');

  const {isLightTheme, updateTheme, isEnglishLanguage, updateLanguage} =
    useAppContext();

  const externalStyle = getStyleSheet(isLightTheme);
  // const [backgroundMode, setBackgroundMode] = useState(true);
  // const [language, setLanguage] = useState(true);

  // const updateTheme = async isLight => {
  //   setIsLightTheme(isLight);

  //   try {
  //     await AsyncStorage.setItem('backgroundMode', JSON.stringify(isLight));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const updateLanguage = async isEnglish => {
  //   setIsEnglishLanguage(isEnglish);

  //   try {
  //     await AsyncStorage.setItem('language', JSON.stringify(isEnglish));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   const saveBackgroundMode = async () => {
  //     try {
  //       console.log('saving theme', {isLight});
  //       if (isLight) {
  //         // setBackgroundMode(true);
  //         await AsyncStorage.setItem('backgroundMode', JSON.stringify(true));
  //       } else {
  //         // setBackgroundMode(false);
  //         await AsyncStorage.setItem('backgroundMode', JSON.stringify(false));
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     console.log(
  //       'background#####',
  //       await AsyncStorage.getItem('backgroundMode'),
  //     );
  //   };
  //   saveBackgroundMode();
  // }, [isLight]);

  // useEffect(() => {
  //   const saveLanguage = async () => {
  //     try {
  //       if (isEnglish) {
  //         await AsyncStorage.setItem('language', JSON.stringify(true));
  //       } else {
  //         await AsyncStorage.setItem('language', JSON.stringify(false));
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     console.log('language#####', await AsyncStorage.getItem('language'));
  //   };
  //   saveLanguage();
  // }, [isEnglish]);

  // useEffect(() => {
  //   const getStoredData = async () => {
  //     try {
  //       const backgroundTheme = JSON.parse(
  //         await AsyncStorage.getItem('backgroundMode'),
  //       );
  //       setIsLight(backgroundTheme);
  //       const languageSetting = JSON.parse(
  //         await AsyncStorage.getItem('language'),
  //       );
  //       setIsEnglish(languageSetting);
  //       // console.log(
  //       //   '--------------stored data : background - ',
  //       //   backgroundTheme,
  //       //   '---------------langugage - ',
  //       //   languageSetting,
  //       // );
  //       console.log({backgroundTheme, languageSetting});
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   getStoredData();
  // }, []);

  return (
    <View style={[styles.pageContainer, externalStyle.pageContainer]}>
      <View style={styles.contentContainer}>
        <View style={styles.contentSection}>
          <SettingBox
            title={isEnglishLanguage ? 'Background mode' : 'Bakgrunnsmodus'}
            choiceOne={isEnglishLanguage ? 'Light mode' : 'Lys modus'}
            choiceTwo={isEnglishLanguage ? 'Dark mode' : 'Mørk modus'}
            isChoiceOne={isLightTheme}
            setIsChoiceOne={updateTheme}
            textColor={isLightTheme ? 'black' : '#f3f6f4'}
            bgColor={isLightTheme ? '#f3f6f4' : '#36384c'}
          />
        </View>
        <View style={styles.contentSection}>
          <SettingBox
            title={isEnglishLanguage ? 'Language' : 'Språk'}
            choiceOne={isEnglishLanguage ? 'English' : 'Engelsk'}
            choiceTwo={isEnglishLanguage ? 'Norwegian' : 'Norsk'}
            isChoiceOne={isEnglishLanguage}
            setIsChoiceOne={updateLanguage}
            textColor={isLightTheme ? 'black' : '#f3f6f4'}
            bgColor={isLightTheme ? '#f3f6f4' : '#36384c'}
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
