import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const CardContainer = styled(TouchableOpacity)`
  background-color: #B80028;
  opacity: 0.8;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  align-items: center;
  padding: 15px 0 0 0 ;
`;

const CarImage = styled.Image`
  width: 220px;
  height: 120px;
  margin: 0px ;
`;

const CarName = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  `;

interface CardProps {
  name: string;
  image: any;
}

const CardComponent: React.FC<CardProps> = ({ name, image }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Description', { name });
  };

  return (
    <CardContainer onPress={handlePress}>
      <CarName>{name}</CarName>
      <CarImage source={image} />
    </CardContainer>
  );
};

export default CardComponent;
