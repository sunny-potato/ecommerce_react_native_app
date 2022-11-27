import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import FilterScreen from './src/screens/FilterScreen';
import ItemScreen from './src/screens/ItemScreen';
import FilterResultsScreen from './src/screens/FilterResultsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import {AppContextProvider} from './src/AppContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LandingNavigation = () => {
  const HomeStackScreen = () => {
    return (
      <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Filters" component={FilterScreen} />
        <Stack.Screen
          name="FilterResults"
          component={FilterResultsScreen}
          options={{title: 'Filter results'}}
        />
        <Stack.Screen name="Item" component={ItemScreen} />
      </Stack.Navigator>
    );
  };
  const FavoritesStackScreen = () => {
    return (
      <Stack.Navigator initialRouteName="Favorites">
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    );
  };

  const SettingsStackScreen = () => {
    return (
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarLabelStyle: {
                fontSize: 16,
                color: 'black',
              },

              tabBarIcon: () => (
                <Image
                  source={require('./src/icons/thumbnail.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="FavoritesTab"
            component={FavoritesStackScreen}
            options={{
              tabBarLabel: 'Favorites',
              tabBarLabelStyle: {
                fontSize: 16,
                color: 'black',
              },
              tabBarIcon: ({focused, color, size}) => (
                <Image
                  source={require('./src/icons/heart.png')}
                  style={{width: 23, height: 23}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="SettingsTab"
            component={SettingsStackScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarLabelStyle: {
                fontSize: 16,
                color: 'black',
              },
              tabBarIcon: ({focused, color, size}) => (
                <Image
                  source={require('./src/icons/settings.png')}
                  style={{width: 23, height: 23}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default LandingNavigation;
