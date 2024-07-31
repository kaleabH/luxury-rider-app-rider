// CarCard.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';

type CarCardProps = {
  
  name: string;
  imagePath: string; // Local image path
  price: string;
  category: 'VIP' | 'VVIP' | 'Corporate';
  seats: number;
  speed: string; // or number if preferred
};

const CarCard: React.FC<CarCardProps> = ({ name, imagePath, price, category, seats, speed }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{name}</Title>
      </Card.Content>

      <Image source={imagePath} style={styles.image} />

      <Card.Content style={styles.detailsContainer}>
        <Paragraph style={styles.price}>{price}</Paragraph>

        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <IconButton icon="crown" iconColor="#B80028" />
            <Paragraph>{category}</Paragraph>
          </View>
          <View style={styles.iconContainer}>
            <IconButton icon="seat" iconColor="#B80028" />
            <Paragraph>{seats} seats</Paragraph>
          </View>
          <View style={styles.iconContainer}>
            <IconButton icon="speedometer" iconColor="#B80028" />
            <Paragraph>{speed} km/h</Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: 300, 
    height:"auto",
    alignSelf: 'center', // Center the card horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 5,

  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginVertical:10,
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarCard;
