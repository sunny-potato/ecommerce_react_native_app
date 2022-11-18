import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import FilterScreen from './src/screens/FilterScreen';
import ItemScreen from './src/screens/ItemScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={HomeScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
    </Stack.Navigator>
  );
};

// const ItemStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       {/* <Stack.Screen name="Filter" component={FilterScreen} /> */}
//     </Stack.Navigator>
//   );
// };

const LandingNavigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator> */}
      <Tab.Navigator screenOptions={{headerShown: false}}>
        {/* bottommenu wiht icons -> customizing the appearance 
        https://reactnavigation.org/docs/tab-based-navigation/#why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component */}
        <Tab.Screen name="Home" component={HomeStackScreen} />
        {/* <Tab.Screen name="Settings" component={Settings} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LandingNavigation;
