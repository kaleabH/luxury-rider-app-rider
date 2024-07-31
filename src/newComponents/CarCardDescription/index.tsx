import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Paragraph, Button, IconButton } from 'react-native-paper';
import CarCard from '../CarCard'; // Import the existing CarCard component
import BackButton from '../BackButton'; // Your custom back button component
import CustomButton from '../Button';
import { useNavigation } from '@react-navigation/native';
// import BookNowButton from './BookNowButton'; // Your custom button component

type CarCardDescriptionProps = {
  car: {
    name: string;
    imagePath: string;
    price: string;
    category: 'VIP' | 'VVIP' | 'Corporate';
    seats: number;
    speed: string;
    description: string;
  };
  driver: {
    imagePath: string;
    name: string;
    address: string;
    availability: boolean;
    rating: number;
  };
  specifications: {
    seats: number;
    transmission: 'auto' | 'manual';
    airbags: number;
    speed: string;
    fuelCapacity: string;
  };
};

const CarCardDescription: React.FC<CarCardDescriptionProps> = ({ car, driver, specifications }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <BackButton />
      <Card style={styles.card}>
        <CarCard {...car} />
        <Card.Content>
          {/* Overview */}
          <Text style={styles.sectionTitle}>Overview</Text>
          <Paragraph>{car.description}</Paragraph>

          {/* Driver Details */}
          <Text style={styles.sectionTitle}>Driver Details</Text>
            <View style={styles.driverContainer}>
              <Image source={driver.imagePath} style={styles.driverImage} />
              <View style={styles.driverInfo}>
                <Text style={styles.driverName}>{driver.name}</Text>
                <Text>{driver.address}</Text>
                <Text>Rating: {driver.rating}</Text>

              </View>
              <View style={styles.horizontalContainer}>
                {driver.availability && <IconButton icon="check-circle" color="green" />}
                <Text>{driver.availability ? 'Available' : 'Not Available'}</Text>
              </View>
              
            </View>

                {/* specification */}
          <Text style={styles.sectionTitle}>Specifications</Text>
          <View style={styles.specificationsContainer}>
          <View style={styles.iconContainer}>
            <IconButton icon="seat" iconColor="#B80028" />
            <Paragraph>{specifications.seats} seats</Paragraph>
          </View>

          <View style={styles.iconContainer}>
            <IconButton icon="car" iconColor="#B80028" />
            <Paragraph>{specifications.transmission}</Paragraph>
          </View>

          <View style={styles.iconContainer}>
            <IconButton icon="airbag" iconColor="#B80028" />
            <Paragraph>{specifications.airbags} airbags</Paragraph>
          </View>

          <View style={styles.iconContainer}>
            <IconButton icon="speedometer" iconColor="#B80028" />
            <Paragraph>{specifications.speed} km/h</Paragraph>
          </View>

          <View style={styles.iconContainer}>
            <IconButton icon="fuel" iconColor="#B80028" />
            <Paragraph>{specifications.fuelCapacity}</Paragraph>
          </View>

          <View style={styles.iconContainer}>
            <IconButton icon="crown" iconColor="#B80028" />
            <Paragraph>{car.category}</Paragraph>
          </View>
          </View>
        </Card.Content>
          <View style={styles.button}>
          <CustomButton title="Book Now" onPress={handlePress} />
          </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    // width:400,
    alignContent:'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    color: '#B80028',
    fontWeight: 'bold',
    fontSize:20,
    marginVertical: 20,
  },
  driverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  driverInfo: {
    flex: 1,
    marginLeft: 20,
  },
  driverName: {
    fontWeight: 'bold',
  },
  specificationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  horizontalContainer: {
    flex: 1,
    // marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  button:{
  marginTop:30,
  }
});

export default CarCardDescription;
