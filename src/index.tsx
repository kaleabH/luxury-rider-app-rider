import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './theme';

import Welcome from './screens/Welcome';
import Verification from './screens/Verification';
import AddCard from './screens/AddCard';
import CurrentLocation from './screens/CurrentLocation';
import SelectDestination from './screens/SelectDestination';
import Request from './screens/Request';
import YourRide from './screens/YourRide';
import DrawerNavigator from './navigation/DrawerNavigator';
import CardDescription from './screens/CardDescription';

const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen
        name='DrawerNavigator'
        component={DrawerNavigator}
        />
          <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
          <Stack.Screen
            name="SelectDestination"
            component={SelectDestination}
          />
          <Stack.Screen name="Request" component={Request} />
          <Stack.Screen name="Description" component={CardDescription} />
          <Stack.Screen name="YourRide" component={YourRide} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Index;
