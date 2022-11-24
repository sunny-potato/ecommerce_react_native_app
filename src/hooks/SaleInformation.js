import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

export const saleInformation = (currentItem, language, text, externalStyle) => {
  if (currentItem.onsale) {
    const originalPrice = (
      currentItem.price /
      (1 - currentItem.data.discount / 100)
    ).toFixed(0);

    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={[text.small, externalStyle.textColor]}>
            {language ? 'Sale until' : 'Tilbud t.o.m'}
          </Text>
          <Text style={[text.medium, externalStyle.textColor]}>
            {currentItem.data.period}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              text.small,
              {textDecorationLine: 'line-through'},
              externalStyle.textColor,
            ]}>
            {language
              ? `Original price ${originalPrice}kr`
              : `Original pris ${originalPrice}kr`}
          </Text>
          <Text style={[text.small, externalStyle.textColor]}>
            {currentItem.data.discount}% OFF
          </Text>
        </View>
      </View>
    );
  }
};
