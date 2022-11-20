import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable, Button} from 'react-native';
import SearchBar from './SearchBar';
import DisplayItems from './DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';

const FilterDropdown = ({list, categoryTitle, checkedList, setCheckedList}) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(checkedList);

  return (
    <View>
      <Pressable
        onPress={() => {
          isChecked ? setIsChecked(false) : setIsChecked(true);
        }}>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>{categoryTitle}</Text>
          {isChecked ? <Text>-</Text> : <Text>+</Text>}
        </View>
      </Pressable>
      <View>
        {isChecked &&
          list.map((i, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  if (checkedList.find(checkedName => checkedName === i)) {
                    setCheckedList([
                      ...checkedList.splice(0, checkedList.indexOf(i)),
                      ...checkedList.splice(checkedList.indexOf(i) + 1),
                    ]);
                  } else {
                    setCheckedList([...checkedList, i]);
                  }
                }}>
                <View style={styles.subCategory}>
                  <Text>{i}</Text>
                  {checkedList.find(checkedName =>
                    checkedName === i ? true : false,
                  ) ? (
                    <Text>-</Text>
                  ) : (
                    <Text>+</Text>
                  )}
                </View>
              </Pressable>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subCategory: {
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FilterDropdown;
