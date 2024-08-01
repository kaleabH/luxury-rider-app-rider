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
import carImage from './assets/cars/car4.jpg';
import carImage1 from './assets/cars/car5.jpg';
import carImage2 from './assets/cars/car6.jpg';
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
const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#B80028" />
      <StatusBar hidden={false} />

    <ThemeProvider theme={theme}>
      <NavigationContainer>

        <ListingScreen />
        {/* <SearchComponent /> */}
      {/* <CarDescription /> */}
      {/* <CarCard
        name="Marcedes Benz"
        imagePath={carImage}
        price="10,000 birr/day"
        category="VVIP"
        seats={4}
        speed="100"
      />
      <CarCard
        name="Marcedes Benz"
        imagePath={carImage1}
        price="10,000 birr/day"
        category="VIP"
        seats={4}
        speed="100"
      />
      <CarCard
        name="Audi"
        imagePath={carImage2}
        price="10,000 birr/day"
        category="Corporate"
        seats={4}
        speed="100"
      /> */}
      
      {/* <BottomNav /> */}
      
       
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
      {/* <Stack.Screen name="AuthScreen" component={AuthSreen} /> */}
      {/* <Stack.Screen name="Verification" component={VerificationScreen} /> */}
      {/* <Stack.Screen name="UserDetails" component={UserDetailsScreen} /> */}
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      {/* <Stack.Screen name='DrawerNavigator'component={DrawerNavigator}/> */}

      {/* <Stack.Screen name="CountrySelector" component={CountrySelectorScreen} /> */}
       
          {/* <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
          <Stack.Screen name="SelectDestination"component={SelectDestination}/>
          <Stack.Screen name="Request" component={Request} />
          <Stack.Screen name="Description" component={CardDescription} />
          <Stack.Screen name="YourRide" component={YourRide} /> */}
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default Index;
