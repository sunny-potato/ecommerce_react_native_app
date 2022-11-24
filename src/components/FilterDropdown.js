import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {text, getStyleSheet} from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FilterDropdown = ({list, categoryTitle, checkedList, setCheckedList}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState(true);
  const externalStyle = getStyleSheet(backgroundMode);

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const backgroundTheme = JSON.parse(
          await AsyncStorage.getItem('backgroundMode'),
        );
        setBackgroundMode(backgroundTheme);
      } catch (e) {
        console.error(e);
      }
    };
    getStoredData();
  }, []);

  return (
    <View style={styles.filterBox}>
      <Pressable
        onPress={() => {
          isChecked ? setIsChecked(false) : setIsChecked(true);
        }}>
        <View style={styles.category}>
          <Text style={[text.medium, externalStyle.textColor]}>
            {categoryTitle}
          </Text>
          {isChecked ? (
            <Text style={[styles.minusIcon, externalStyle.textColor]}>-</Text>
          ) : (
            <Text style={[styles.plusIcon, externalStyle.textColor]}>+</Text>
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
                  <Text style={text.small}>{i}</Text>
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
    backgroundColor: '#f26d52',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  categoryTitle: {fontSize: 18, fontWeight: '600'},
  minusIcon: {fontSize: 22, fontWeight: '700'},
  plusIcon: {fontSize: 20, fontWeight: '700'},
  subCategory: {
    backgroundColor: '#f5a374',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkIcon: {width: 10, height: 10},
});

export default FilterDropdown;
