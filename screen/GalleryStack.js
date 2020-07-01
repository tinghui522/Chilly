import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image,AsyncStorage  } from 'react-native';

import GalleryScreen from './screen/GalleryScreen';
import PenguinScreen from './screen/PenguinScreen';

const Stack = createStackNavigator();



const GalleryStack = ({}) => {
  return (
      
      <Stack.Navigator>
        
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      </Stack.Navigator>
  );
}

export default GalleryStack;