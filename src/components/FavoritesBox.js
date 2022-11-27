import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {text, getStyleSheet} from '../style/Style';

const FavoritesBox = ({
  image,
  onPress,
  name,
  type,
  origin,
  price,
  unit,
  tag,
  textColor,
  bgColor,
}) => {
  return (
    <View style={[styles.favoritesBox, {backgroundColor: bgColor}]}>
      <Pressable onPress={onPress}>
        <View style={[styles.contentBox, {backgroundColor: bgColor}]}>
          <Image style={styles.image} source={image} />
          <View style={styles.information}>
            <View style={styles.infoDetails}>
              <Text style={[text.large, {color: textColor}]}>{name} </Text>
              <Text style={[text.small, {color: textColor}]}>({type})</Text>
            </View>
            <Text style={[text.small, {color: textColor}]}>{origin}</Text>
            <View style={styles.infoDetails}>
              <Text style={[text.medium, {color: textColor}]}>{price}kr</Text>
              <Text style={[text.small, {color: textColor}]}>/{unit}</Text>
            </View>
            {tag}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesBox: {
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    // backgroundColor: 'red',
  },
  contentBox: {
    height: 100,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    borderRadius: 10,
  },
  image: {width: 100, height: 100, resizeMode: 'cover', borderRadius: 10},
  information: {
    width: 250,
    height: 100,
    padding: 10,
  },
  infoDetails: {flexDirection: 'row', alignItems: 'center'},
});

export default FavoritesBox;
