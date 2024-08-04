import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';

type DriverCardProps = {
  name: string;
  vehicleRegistration: string;
  imagePath: string;
};

const DriverCard: React.FC<DriverCardProps> = ({ name, vehicleRegistration, imagePath }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <View style={styles.textContainerVehicle}>
          <Avatar.Image size={50} source={imagePath} style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.registration}>Vehicle Registration</Text>
          <Text style={styles.registration}>{vehicleRegistration}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 50,
    elevation: 3,
    margin: 10,
    // padding: 10,
  },
  container: {
    marginHorizontal:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    // alignItems: '',
  },
  avatar: {
    marginRight: 5,
  },
  textContainerVehicle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginRight:20,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'flex-end'
    
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  registration: {
    fontSize: 14,
    color: 'grey',
  },
});

export default DriverCard;
