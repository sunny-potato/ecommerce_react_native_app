import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable, Button} from 'react-native';
import SearchBar from './SearchBar';
import DisplayItems from './DisplayItems';
import useApi from '../data/api';
import Data from '../data/data.json';
import {localImages} from '../data/localImages';

const FilterDropdown = ({list, categoryTitle, checkedList, setCheckedList}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.filterBox}>
      <Pressable
        onPress={() => {
          isChecked ? setIsChecked(false) : setIsChecked(true);
        }}>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>{categoryTitle}</Text>
          {isChecked ? (
            <Text style={styles.minusIcon}>-</Text>
          ) : (
            <Text style={styles.plusIcon}>+</Text>
          )}
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
                    <Image
                      style={styles.checkIcon}
                      source={require('../icons/check.png')}
                    />
                  ) : (
                    <Text />
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
  filterBox: {width: 250},
  category: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  categoryTitle: {fontSize: 18, fontWeight: '600'},
  minusIcon: {fontSize: 22, fontWeight: '900'},
  plusIcon: {fontSize: 20, fontWeight: '900'},
  subCategory: {
    backgroundColor: 'lightgreen',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkIcon: {width: 10, height: 10},
});

export default FilterDropdown;
