import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {text} from '../style/Style';

const FilterButton = ({
  buttonTitle,
  isChecked,
  setIsChecked,
  textColor,
  bgColor,
}) => {
  return (
    <Pressable
      onPress={() => (isChecked ? setIsChecked(false) : setIsChecked(true))}
      style={[
        styles.filterBox,
        {backgroundColor: isChecked ? '#f26d52' : bgColor},
      ]}>
      <Text style={[styles.titleText, text.medium, {color: textColor}]}>
        {buttonTitle}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filterBox: {borderRadius: 10, borderColor: '#f26d52', borderWidth: 2},
  titleText: {padding: 5},
});

export default FilterButton;
