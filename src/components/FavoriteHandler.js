import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isKeyfound = async key => {
  try {
    const list = await AsyncStorage.getAllKeys();
    return list.includes(key);
  } catch (e) {
    console.error(e);
  }
};

export const getList = async key => {
  try {
    const favoriteList = await AsyncStorage.getItem(key);
    return JSON.parse(favoriteList);
  } catch (e) {
    console.error(e);
  }
};

export const saveItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

export const clearList = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error(e);
  }
};
