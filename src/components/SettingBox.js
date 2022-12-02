import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {text} from '../style/Style';

const SettingBox = ({
  title,
  choiceOne,
  choiceTwo,
  isChoiceOne,
  setIsChoiceOne,
  textColor,
  bgColor,
}) => {
  return (
    <View>
      <Text style={[styles.titleText, text.large, {color: textColor}]}>
        {title}
      </Text>
      <View style={[styles.choiceSelction, {backgroundColor: bgColor}]}>
        <Pressable
          style={styles.eachChoice}
          onPress={() => setIsChoiceOne(true)}>
          <Text style={[styles.choiceText, text.medium, {color: textColor}]}>
            {choiceOne}
          </Text>
          {isChoiceOne ? (
            <Image
              style={styles.checkIcon}
              source={require('../icons/check.png')}
            />
          ) : (
            <Text>{''}</Text>
          )}
        </Pressable>
        <Pressable
          style={styles.eachChoice}
          onPress={() => setIsChoiceOne(false)}>
          <Text style={[styles.choiceText, text.medium, {color: textColor}]}>
            {choiceTwo}
          </Text>
          {isChoiceOne ? (
            <Text>{''}</Text>
          ) : (
            <Image
              style={styles.checkIcon}
              source={require('../icons/check.png')}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    padding: 10,
  },
  choiceSelction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  eachChoice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 130,
    backgroundColor: '#f26d52',
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  choiceText: {
    paddingVertical: 5,
  },
  checkIcon: {width: 15, height: 15, marginLeft: 'auto'},
});

export default SettingBox;
