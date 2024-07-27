import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/forgot';
import {SCREEN} from '../constants/screen';
import Login from '../screens/login';
import Forgot from '../screens/forgot';
import Leads from '../screens/Leads';

const Stack = createNativeStackNavigator();

const RouteHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN.LOGIN} component={Login} />
        <Stack.Screen name={SCREEN.FORGOT} component={Forgot} />
        <Stack.Screen name={SCREEN.LEADS} component={Leads} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteHandler;
