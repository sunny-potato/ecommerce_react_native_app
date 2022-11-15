//import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Pressable} from 'react-native';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  //const navigation = useNavigation();
  return (
    <SafeAreaView>
      <SearchBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
