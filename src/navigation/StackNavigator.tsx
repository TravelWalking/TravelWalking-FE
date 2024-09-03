import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import BottomTabNavigator from './BottomTabNavigator';

export type StackParamList = {
    Main: undefined;
    Search: undefined;
  };
  
const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
