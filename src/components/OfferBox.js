import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Image, Alert, Pressable} from 'react-native';

const OfferBox = ({image, name, type, price, unit, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.itemBox}>
      <Image style={styles.itemImage} source={image} />
      <View style={styles.itemInfo}>
        <View style={styles.nameType}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemType}>{type}</Text>
        </View>
        <View style={styles.PriceUnit}>
          <Text style={styles.itemPrice}>{price}kr</Text>
          <Text style={styles.itemUnit}>/{unit}</Text>
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
    // borderRadius: 10,
    margin: 10,
    // marginHorizontal: 10,
    // marginVertical: 5,
    // backgroundColor: 'lightgray',
  },
  nameType: {
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  itemName: {fontSize: 22, fontWeight: '600'},
  itemType: {fontSize: 14},
  PriceUnit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  itemPrice: {fontSize: 18, fontWeight: '600'},
  itemUnit: {fontSize: 14},
});
export default OfferBox;
