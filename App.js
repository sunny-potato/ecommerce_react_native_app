import React, {useState, useEffect} from 'react';
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
import {getStyleSheet} from './src/style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContextProvider} from './src/AppContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LandingNavigation = () => {
  const HomeStackScreen = () => {
    return (
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerStyle: {
            backgroundColor: backgroundMode ? '#f3f6f4' : '#36384c',
          },
          headerTintColor: backgroundMode ? 'black' : '#f3f6f4',
        }}>
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
      <Stack.Navigator
        initialRouteName="Favorites"
        screenOptions={{
          headerStyle: {
            backgroundColor: backgroundMode ? '#f3f6f4' : '#36384c',
          },
          headerTintColor: backgroundMode ? 'black' : '#f3f6f4',
        }}>
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    );
  };

  const SettingsStackScreen = () => {
    return (
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: {
            backgroundColor: backgroundMode ? '#f3f6f4' : '#36384c',
          },
          headerTintColor: backgroundMode ? 'black' : '#f3f6f4',
        }}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  };

  const [backgroundMode, setBackgroundMode] = useState(true);
  // const externalStyle = getStyleSheet(backgroundMode);
  console.log('--------------------------------', backgroundMode);

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const backgroundTheme = JSON.parse(
          await AsyncStorage.getItem('backgroundMode'),
        );
        setBackgroundMode(backgroundTheme);
      } catch (e) {
        console.error(e);
      }
    };
    getStoredData();
  }, []);

  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: backgroundMode ? '#f3f6f4' : '#36384c',
            },
            headerTintColor: backgroundMode ? 'black' : '#f3f6f4',
          }}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarLabelStyle: {
                fontSize: 16,
                color: backgroundMode ? 'black' : '#f3f6f4',
              },
              // tabBarStyle: {
              //   backgroundColor: backgroundMode ? 'black' : '#f3f6f4',
              // },
              tabBarIcon: ({focused, color, size}) => (
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
                color: backgroundMode ? 'black' : '#f3f6f4',
              },
              // tabBarStyle: {backgroundColor: externalStyle.pageContainer},
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
                color: backgroundMode ? 'black' : '#f3f6f4',
              },
              // tabBarStyle: {backgroundColor: externalStyle.pageContainer},
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
