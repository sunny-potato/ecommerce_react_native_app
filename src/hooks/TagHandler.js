import React from 'react';
import {View, Text} from 'react-native';

export const tagInfo = (currentItem, language, text, externalStyle) => {
  const tagList = [];
  if (currentItem.type) {
    tagList.push(`#${currentItem.type}`);
  }
  if (currentItem.onsale) {
    language ? tagList.push('#Sale') : tagList.push('#Salg');
  }
  if (currentItem.isorganic) {
    language ? tagList.push('#Organic') : tagList.push('#Økologisk');
  }
  if (currentItem.isnew) {
    language ? tagList.push('#New') : tagList.push('#Ny');
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {tagList !== 0 &&
        tagList.map((tag, index) => {
          return (
            <Text
              key={index}
              style={[{paddingRight: 3}, text.small, externalStyle.textColor]}>
              {tag}
            </Text>
          );
        })}
    </View>
  );
};
