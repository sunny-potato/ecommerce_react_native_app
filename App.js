import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LandingNavigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        {/* bottommenu wiht icons -> customizing the appearance 
        https://reactnavigation.org/docs/tab-based-navigation/#why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component */}
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Settings" component={Settings} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LandingNavigation;
