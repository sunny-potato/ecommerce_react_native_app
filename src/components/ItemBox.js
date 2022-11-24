import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {text} from '../style/Style';

const ItemBox = ({
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
        <Image
          style={styles.itemImage}
          source={image} //props = image
        />
        <View style={styles.itemInfo}>
          <View style={styles.infoDetails}>
            <Text style={[text.title, {color: textColor}]}>{name}</Text>
            <Text style={[text.small, {color: textColor}]}>{type}</Text>
          </View>
          <View style={styles.infoDetails}>
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
    width: 200,
    height: 260,
    // backgroundColor: 'white',
    borderRadius: 12,
    borderColor: 'white',
    margin: 10,
  },
  itemImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  itemInfo: {marginLeft: 10},
  infoDetails: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
export default ItemBox;
