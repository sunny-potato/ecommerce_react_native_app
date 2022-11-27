import React from 'react';
import {View, StyleSheet} from 'react-native';
import SettingBox from '../components/SettingBox';
import {getStyleSheet} from '../style/Style';
import {useAppContext} from '../AppContext';

const SettingsScreen = () => {
  const {isLightTheme, updateTheme, isEnglishLanguage, updateLanguage} =
    useAppContext();

  const externalStyle = getStyleSheet(isLightTheme);

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
