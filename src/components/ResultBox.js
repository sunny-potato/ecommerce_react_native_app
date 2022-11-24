import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {text} from '../style/Style';

const ResultBox = ({
  image,
  name,
  type,
  price,
  unit,
  onPress,
  textColor,
  bgColor,
}) => {
  return (
    <View style={[styles.itemBox, {backgroundColor: bgColor}]}>
      <Pressable onPress={onPress}>
        <Image style={styles.itemImage} source={image} />
        <View style={styles.itemInfo}>
          <Text style={[text.title, {color: textColor}]}>{name}</Text>
          <Text style={[text.small, {color: textColor}]}>{type}</Text>
          <View style={styles.PriceUnit}>
            <Text style={[text.large, {color: textColor}]}>{price}kr</Text>
            <Text style={[text.small, {color: textColor}]}>/{unit}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    width: 170,
    height: 250,
    // backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  itemImage: {width: 170, height: 170, resizeMode: 'contain', borderRadius: 10},
  itemInfo: {marginLeft: 10},
  PriceUnit: {flexDirection: 'row', alignItems: 'center'},
});
export default ResultBox;
