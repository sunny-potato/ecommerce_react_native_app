import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {text, backgroundColor} from '../style/Style';

const SettingBox = ({
  title,
  choiceOne,
  choiceTwo,
  isChoiceOne,
  setIsChoiceOne,
}) => {
  //   const [isChoiceOne, setIsChoiceOne] = useState(false);
  //   console.log(isChoiceOne);
  return (
    <View>
      <Text style={[styles.titleText, text.large]}>{title}</Text>
      <View style={styles.choiceSelction}>
        <Pressable
          style={styles.eachChoice}
          onPress={() => setIsChoiceOne(true)}>
          <Text style={[styles.choiceText, text.medium]}>{choiceOne}</Text>
          {isChoiceOne ? (
            <Image
              style={styles.checkIcon}
              source={require('../icons/check.png')}
            />
          ) : (
            <Text>{''}</Text>
          )}
        </Pressable>
        <Pressable
          style={styles.eachChoice}
          onPress={() => setIsChoiceOne(false)}>
          <Text style={[styles.choiceText, text.medium]}>{choiceTwo}</Text>
          {isChoiceOne ? (
            <Text>{''}</Text>
          ) : (
            <Image
              style={styles.checkIcon}
              source={require('../icons/check.png')}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    padding: 10,
  },
  choiceSelction: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  eachChoice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 130,
    backgroundColor: 'orange',
    paddingHorizontal: 7,
  },
  choiceText: {
    paddingVertical: 5,
  },
  checkIcon: {width: 15, height: 15, marginLeft: 'auto'},
});

export default SettingBox;
