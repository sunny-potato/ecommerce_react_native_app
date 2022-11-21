import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {text} from '../style/Style';

const OfferBox = ({image, name, type, price, unit, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.itemBox}>
      <Image style={styles.itemImage} source={image} />
      <View style={styles.itemInfo}>
        <View style={styles.nameType}>
          <Text style={text.title}>{name}</Text>
          <Text style={text.small}>{type}</Text>
        </View>
        <View style={styles.PriceUnit}>
          <Text style={text.large}>{price}kr</Text>
          <Text style={text.small}>/{unit}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    width: 380,
    height: 80,
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    margin: 10,
  },
  itemImage: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 10,
    margin: 5,
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  nameType: {
    justifyContent: 'center',
  },
  PriceUnit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OfferBox;
