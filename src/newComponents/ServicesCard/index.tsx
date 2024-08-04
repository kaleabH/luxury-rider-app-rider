import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Card, Title, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface ServicesCardProps {
  title: string;
  imagePath: string;
  navigateTo: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, imagePath, navigateTo }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={() => navigateTo=="back"? navigation.goBack():navigation.navigate(navigateTo)} style={styles.touchable}>
      <Card style={styles.card}>
        <View style={styles.content}>
          <Image source={imagePath} style={styles.image} />
          <Title style={styles.title}>{title}</Title>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    margin: 5,
  },
  card: {
    width: 70,
    height: 80,
    justifyContent: 'space-between',
    flexDirection:'column'
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    // padding: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
  },
});

export default ServicesCard;
