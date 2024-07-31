// ExampleUsage.tsx
import React from 'react';
import { ScrollView } from 'react-native';

import CarCardDescription from '../../newComponents/CarCardDescription'; // Adjust the import path as necessary
import carImage from '../../assets/cars/car4.jpg'
import driverImage from '../../assets/avatar.png'

const CarDescription = () => {
  const carData = {
    name: "Range Rover Evoque",
    imagePath:carImage,
    price: "Br10,000/day",
    category: 'VVIP',
    seats: 4,
    speed: "100",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
  };

  const driverData = {
    imagePath:driverImage,
    name: "Cristin Alberto",
    address: "Santa Ana, California",
    availability: true,
    rating: 4.5,
  };

  const specificationsData = {
    seats: 4,
    transmission: 'auto',
    airbags: 4,
    speed: "100 mph",
    fuelCapacity: "90 liters",
  };

  return (
    <ScrollView>
      <CarCardDescription
        car={carData}
        driver={driverData}
        specifications={specificationsData}
      />
    </ScrollView>
  );
};

export default CarDescription;
