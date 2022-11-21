import {View, StyleSheet, Text, Image, Pressable} from 'react-native';

export const text = StyleSheet.create({
  pageTitle: {fontSize: 22, fontWeight: '600', color: 'black'},
  itemTitle: {fontSize: 28, fontWeight: '900', color: 'black'},
  title: {fontSize: 20, fontWeight: '500', color: 'black'},
  large: {fontSize: 18, fontWeight: '500', color: 'black'},
  medium: {fontSize: 16, fontWeight: '500', color: 'black'},
  small: {fontSize: 12, color: 'black'},
});

export const backgroundColor = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    backgroundColor: 'white',
  },
});
