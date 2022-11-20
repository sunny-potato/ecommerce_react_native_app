import React from 'react';
import {View, StyleSheet, Text, Image, Alert, Pressable} from 'react-native';

const FavoritBox = () => {
  return <View style={styles.favoritBox} />;
};

const styles = StyleSheet.create({
  favoritBox: {
    width: 80,
    height: 78,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'red',
  },
});
export default FavoritBox;
