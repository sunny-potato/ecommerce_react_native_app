import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  Pressable,
} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.inputBox}>
        <TextInput style={styles.textInput} placeholder="Enter keyword" />
        <Image
          style={styles.searchIcon}
          source={require('../icons/search.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 5,
    height: 40,
    paddingRight: 10,
    margin: 15,
  },
  searchIcon: {width: 20, height: 20},
  textInput: {flex: 1},
});
export default SearchBar;
