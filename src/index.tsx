import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './theme';

import Welcome from './screens/Welcome';
import Verification from './screens/VerificationScreen';
import AddCard from './screens/AddCard';
import CurrentLocation from './screens/CurrentLocation';
import SelectDestination from './screens/SelectDestination';
import Request from './screens/Request';
import YourRide from './screens/YourRide';
import DrawerNavigator from './navigation/DrawerNavigator';
import CardDescription from './screens/CardDescription';
import BottomNav from './newComponents/BottomNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/HomeScreen';
import { StatusBar } from 'react-native';
import TabBarNavigator from './navigation/TabBarNavigator';
import CarCard from './newComponents/CarCard';

import CarCardDescription from './newComponents/CarCardDescription';
import CarDescription from './screens/CardDescription';
import AuthSreen from './screens/AuthScreen';
import CountrySelectorScreen from './screens/CountrySelectorScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import LoadingScreen from './screens/LoadingScreen';
import VerificationScreen from './screens/VerificationScreen';
import HomeScreen from './screens/HomeScreen';
import SearchComponent from './newComponents/Search';
import ListingScreen from './screens/ListingScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapScreen from './screens/MapScreen';
import RideHistoryCard from './newComponents/RideHistoryCard';
import ServicesScreen from './screens/ServicesScreen';
import CustomButton from './newComponents/Button';
const Stack = createStackNavigator();

const handleCallDriver =() => {
  console.log('buttonclicked')
}
const Index: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <StatusBar backgroundColor="#B80028" />
      <StatusBar hidden={false} />

    <ThemeProvider theme={theme}>
      <NavigationContainer> 

      {/* <Request /> */}
    
       
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {/* <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="AuthScreen" component={AuthSreen} />
            <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="UserDetails" component={UserDetailsScreen} /> */}
            {/* <Stack.Screen name='Map'component={MapScreen}/> */}

            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
  
          {/* <Stack.Screen name='Services'component={ServicesScreen}/> */}
          {/* <Stack.Screen name='DrawerNavigator'component={DrawerNavigator}/> */}
         {/* <Stack.Screen name='Listing'component={ListingScreen}/> */}

          

          <Stack.Screen name="Request" component={Request} />
          <Stack.Screen name="YourRide" component={YourRide} />
          {/* <Stack.Screen name="AddCard" component={AddCard} /> */}
          {/* <Stack.Screen name="CurrentLocation" component={CurrentLocation} /> */}
          {/* <Stack.Screen name="SelectDestination"component={SelectDestination}/> */}
          {/* <Stack.Screen name="Description" component={CardDescription} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Index;