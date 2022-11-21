import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';

const ResultBox = ({image, name, type, price, unit, onPress}) => {
  return (
    <View style={styles.itemBox}>
      <Pressable onPress={onPress}>
        <Image
          style={styles.itemImage}
          source={image} //props = image
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemType}>{type}</Text>
          <View style={styles.PriceUnit}>
            <Text style={styles.itemPrice}>{price}kr</Text>
            <Text style={styles.itemUnit}>/{unit}</Text>
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
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    margin: 10,
  },
  itemImage: {width: 170, height: 170, resizeMode: 'contain', borderRadius: 10},
  itemInfo: {marginLeft: 10},
  itemName: {fontSize: 22, fontWeight: '600'},
  itemType: {fontSize: 14},
  PriceUnit: {flexDirection: 'row', alignItems: 'center'},
  itemPrice: {fontSize: 18, fontWeight: '600'},
  itemUnit: {fontSize: 14},
});
export default ResultBox;
