import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import FilterScreen from './src/screens/FilterScreen';
import ItemScreen from './src/screens/ItemScreen';
import FilterResultsScreen from './src/screens/FilterResultsScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Filters" component={FilterScreen} />
      <Stack.Screen name="FilterResults" component={FilterResultsScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
    </Stack.Navigator>
  );
};

const LandingNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        {/* 
          bottommenu wiht icons -> customizing the appearance 
        https://aboutreact.com/react-native-bottom-navigation-icon-from-local/
        https://reactnavigation.org/docs/tab-based-navigation/#why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component */}
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {fontSize: 16},
            // tabBarItemStyle: {width: 200},
            tabBarStyle: {backgroundColor: 'powderblue'},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   icon : {}
// })
export default LandingNavigation;
