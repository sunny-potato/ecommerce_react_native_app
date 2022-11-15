import React from 'react';
import {View, StyleSheet, TextInput, Text, Pressable} from 'react-native';

const SearchBar = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Enter keyword" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {borderWidth: 2},
});
export default SearchBar;
