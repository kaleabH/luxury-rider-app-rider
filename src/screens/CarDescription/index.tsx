// ExampleUsage.tsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import CarCardDescription from '../../newComponents/CarCardDescription'; // Adjust the import path as necessary
// import carImage from '../../assets/cars/car4.jpg'
import driverImage from '../../assets/avatar.png'
import { useRoute } from '@react-navigation/native';

const CarDescription = () => {
  const route = useRoute();
  const {car}: any = route.params;
  const carData = {
    ...car,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
  };

  const driverData = {
    imagePath:driverImage,
    name: "Cristin Alberto",
    address: "Santa Ana, California",
    availability: true,
    rating: 4.5,
  };

  const specificationsData:{  seats: number;
    transmission: "auto" | "manual",
    airbags: number,
    speed: string,
    fuelCapacity: string,} = {
    seats: 4,
    transmission: 'auto',
    airbags: 4,
    speed: "100 mph",
    fuelCapacity: "90 liters",
  };

  return (
    <ScrollView>
      <SafeAreaView>
      <CarCardDescription
        car={carData}
        driver={driverData}
        specifications={specificationsData}
        />
        </SafeAreaView>
    </ScrollView>
  );
};

export default CarDescription;
