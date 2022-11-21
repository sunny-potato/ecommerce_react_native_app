import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {text} from '../style/Style';

const FilterButton = ({buttonTitle, isChekced, setIsChecked}) => {
  return (
    <Pressable
      style={{
        borderRadius: 10,
        backgroundColor: isChekced ? 'lightpink' : 'lightblue',
      }}
      onPress={() => (isChekced ? setIsChecked(false) : setIsChecked(true))}>
      <Text style={[styles.titleText, text.medium]}>{buttonTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  titleText: {padding: 5},
});

export default FilterButton;
