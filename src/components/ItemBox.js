import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {text} from '../style/Style';

const ItemBox = ({image, name, type, price, unit, onPress}) => {
  return (
    <View style={styles.itemBox}>
      <Pressable onPress={onPress}>
        <Image
          style={styles.itemImage}
          source={image} //props = image
        />
        <View style={styles.itemInfo}>
          <Text style={text.title}>{name}</Text>
          <Text style={text.small}>{type}</Text>
          <View style={styles.PriceUnit}>
            <Text style={text.large}>{price}kr</Text>
            <Text style={text.small}>/{unit}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    width: 200,
    height: 280,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    margin: 10,
  },
  itemImage: {width: 200, height: 200, resizeMode: 'contain', borderRadius: 10},
  itemInfo: {marginLeft: 10},
  PriceUnit: {flexDirection: 'row', alignItems: 'center'},
});
export default ItemBox;
