import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductInfo from '../screens/ProductInfo';
import ListProducts from '../screens/ListProducts';
const StackNavigator = () => {
   
const Stack = createNativeStackNavigator();
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListProducts} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Info" component={ProductInfo} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default StackNavigator;