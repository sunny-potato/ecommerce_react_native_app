import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  Pressable,
} from 'react-native';
// from here
const SearchBar = ({data}) => {
  const [query, setQuery] = useState('');
  const [originalData, setOriginalData] = useState(data);

  useEffect(() => {
    const searchQuery = word => {
      const lowerCaseWord = word.toLowerCase();
      console.log('query:------------------', lowerCaseWord);
      if (word.length !== 0) {
        const filteredData = originalData.filter(each => {
          return each.item.toLowerCase().includes(lowerCaseWord);
          //  ||
          // each.description.toLowerCase().includes(lowerCaseWord) ||
          // each.type.toLowerCase(word) ||
          // each.origin.toLowerCase().includes(lowerCaseWor
        });
        console.log('.............. : ', filteredData);
      }
    };
    searchQuery(query);
  }, [query]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter keyword"
          value={query}
          onChangeText={setQuery}
        />
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
