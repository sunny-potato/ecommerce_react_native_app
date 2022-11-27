import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';

const AppContext = React.createContext(null);

/**
 * Get data from parent
 */
export const useAppContext = () => {
  const data = useContext(AppContext);
  if (data === null) {
    throw new Error('Context data is missing. Something is very wrong');
  }

  return data;
};

/**
 * Sends data out to children
 */
export const AppContextProvider = ({children}) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(false);

  const updateTheme = async isLight => {
    setIsLightTheme(isLight);

    try {
      await AsyncStorage.setItem('backgroundMode', JSON.stringify(isLight));
    } catch (e) {
      console.error(e);
    }
  };

  const updateLanguage = async isEnglish => {
    setIsEnglishLanguage(isEnglish);

    try {
      await AsyncStorage.setItem('language', JSON.stringify(isEnglish));
    } catch (e) {
      console.error(e);
    }
  };

  const value = {
    isLightTheme,
    updateTheme,
    isEnglishLanguage,
    updateLanguage,
  };

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const backgroundTheme = JSON.parse(
          await AsyncStorage.getItem('backgroundMode'),
        );
        setIsLightTheme(backgroundTheme);

        const languageSetting = JSON.parse(
          await AsyncStorage.getItem('language'),
        );
        setIsEnglishLanguage(languageSetting);

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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
