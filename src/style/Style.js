import {StyleSheet} from 'react-native';

export const text = StyleSheet.create({
  pageTitle: {
    fontSize: 22,
  },
  itemTitle: {fontSize: 28, fontWeight: '600'},
  title: {fontSize: 20},
  large: {fontSize: 18, fontWeight: '600'},
  medium: {fontSize: 16, color: 'black'},
  small: {fontSize: 12, color: 'black'},
});

export const lightModeStyle = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#f3f6f4',
  },
  sectionContainer: {
    backgroundColor: '#f3f6f4',
  },
  boxContainer: {backgroundColor: 'white'},

  textColor: {color: 'black'},

  textSubColor: {color: 'white'},
});

export const darkModeStyle = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#36384c',
  },
  sectionContainer: {
    backgroundColor: '#36384c',
  },
  boxContainer: {backgroundColor: '#121212'},

  textColor: {color: '#f3f6f4'},

  textSubColor: {color: 'black'},
});

export const getStyleSheet = isLightTheme => {
  return isLightTheme ? lightModeStyle : darkModeStyle;
};
