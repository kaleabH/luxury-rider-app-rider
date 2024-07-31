import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import PhoneInput from '../../components/PhoneInput';
import Button from '../../newComponents/Button';

// import cabImg from '../../assets/cab.png';
import cabImg from '../../assets/welcome.png';
import * as S from './styles';
import CustomButton from '../../newComponents/Button';

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Verification');
  };

  return (
    <S.BackgroundImage source={cabImg} resizeMode="cover">
    <S.Container>
      <StatusBar style="light" />
      <S.TopArea>
        {/* <S.CabImg source={cabImg} resizeMode="contain" /> */}
      </S.TopArea>
      <S.BottomArea>
        <S.Title>
          <S.Title>Welcome to </S.Title>
          <S.TitleBold>Luxury</S.TitleBold>
        </S.Title>
        <PhoneInput placeholder="987 65 43" />
        {/* <S.GetStartedButton onPress={() => navigation.navigate('Verification')}> */}
          {/* <S.ButtonText>Get Started</S.ButtonText> */}
        {/* </S.GetStartedButton> */}
        
        <CustomButton title="Get Started" onPress={handlePress} />
        
      </S.BottomArea>
    </S.Container>
    </S.BackgroundImage>
         
  );
};

export default Welcome;