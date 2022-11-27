import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  Pressable,
} from 'react-native';

const SearchBar = ({data, navigation, language}) => {
  const [query, setQuery] = useState('');
  const [originalData, setOriginalData] = useState(data);

  const dataByLanguage = language
    ? originalData.english
    : originalData.norwegian;
  const lowerCaseWord = query.toLowerCase();
  const filteredData = dataByLanguage.filter(each => {
    return (
      each.item.toLowerCase().includes(lowerCaseWord) ||
      each.type.toLowerCase().includes(lowerCaseWord) ||
      each.origin.toLowerCase().includes(lowerCaseWord) ||
      each.description.toLowerCase().includes(lowerCaseWord)
    );
  });

  return (
    <View style={styles.pageContainer}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder={language ? 'Search product' : 'Søk vare'}
          value={query}
          onChangeText={setQuery}
        />
        <Image
          style={styles.searchIcon}
          source={require('../icons/search.png')}
        />
      </View>
      {query.length > 0 && filteredData.length > 0 && (
        <View style={styles.searchResultsBox}>
          {filteredData.map(i => {
            return (
              <Pressable
                key={i.id}
                onPress={() =>
                  navigation.navigate('Item', {id: i.id, language: language})
                }>
                <View style={styles.searchResults}>
                  <Text>{i.item}</Text>
                  <Text>{i.type}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
      {query.length > 0 && filteredData.length === 0 && (
        <View style={styles.searchResultsBox}>
          {language ? (
            <Text>No result found</Text>
          ) : (
            <Text>Finner ingen favoritter</Text>
          )}
        </View>
      )}
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
  searchResultsBox: {
    position: 'absolute',
    zIndex: 10,
    top: 55,
    marginLeft: 15,
    padding: 10,
    width: 317,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.5,
  },
  searchResults: {flexDirection: 'row', justifyContent: 'space-between'},
});
export default SearchBar;
