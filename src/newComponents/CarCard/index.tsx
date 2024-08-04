// CarCard.tsx
import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import vip from '../../assets/icons/VIP.png';
import vvip from '../../assets/icons/VVIP.png';

type CarCardProps = {
  
  name: string;
  imagePath: ImageSourcePropType; // Local image path
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

      <Image source={imagePath} style={styles.image} resizeMode='stretch' />

      <Card.Content style={styles.detailsContainer}>
        <Paragraph style={styles.price}>{price}</Paragraph>

        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            {/* <IconButton icon="crown" iconColor="#B80028" />
            <Paragraph>{category}</Paragraph> */}
            <Image resizeMode='stretch' source={category == 'VVIP' ? vvip:vip}/>
          </View>
          <View style={styles.iconContainer}>
            <IconButton style={styles.icon} size={22} icon="seat" iconColor="#B80028" />
            <Paragraph style={styles.paragraph}>{seats} seats</Paragraph>
          </View>
          <View style={styles.iconContainer}>
            <IconButton style={styles.icon} size={22} icon="speedometer" iconColor="#B80028" />
            <Paragraph style={styles.paragraph}>{speed}</Paragraph>
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
  paragraph:{
    // lineHeight:,
  },
  icon:{
    margin:0,
    padding:0,
    height:34,
    width:34
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap:'wrap',
    // gap:5,
    width:'100%',
   
  },
  iconImage:{
   width: '60%'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#f0f0f0',
    borderRadius:4,
    // paddingHorizontal:20,
    backgroundColor:'white',
    // gap:0,
    paddingVertical:0,
    // marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarCard;
