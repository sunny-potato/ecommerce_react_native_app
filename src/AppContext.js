import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {useApi} from './data/api';

const AppContext = React.createContext(null);

// Get data from parent
export const useAppContext = () => {
  const data = useContext(AppContext);
  if (data === null) {
    throw new Error('Context data is missing. Check the context data');
  }

  return data;
};

//Sends data out to children
export const AppContextProvider = ({children}) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);
  const {data: allItems} = useApi('/items');
  const {data: typesList} = useApi('/typesList');
  const {data: originsList} = useApi('/originsList');

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

  const updateFavoritesList = async favorite => {
    setFavoritesList(favorite);
    try {
      await AsyncStorage.setItem('favoriteList', JSON.stringify(favorite));
    } catch (e) {
      console.error(e);
    }
  };

  const value = {
    allItems,
    typesList,
    originsList,
    isLightTheme,
    updateTheme,
    isEnglishLanguage,
    updateLanguage,
    favoritesList,
    updateFavoritesList,
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

        const favorites = JSON.parse(
          await AsyncStorage.getItem('favoriteList'),
        );
        setFavoritesList(favorites);
      } catch (e) {
        console.error(e);
      }
    };
    getStoredData();
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
