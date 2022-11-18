import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
} from 'react-native';

const ItemBox = ({image, name, type, price, unit, onPress}) => {
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
    width: 200,
    height: 280,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    margin: 10,
  },
  itemImage: {width: 200, height: 200, borderRadius: 10},
  itemInfo: {},
  itemName: {fontSize: 22, fontWeight: '600'},
  itemType: {fontSize: 14},
  PriceUnit: {flexDirection: 'row', alignItems: 'center'},
  itemPrice: {fontSize: 18, fontWeight: '300'},
  itemUnit: {fontSize: 14},
});
export default ItemBox;
