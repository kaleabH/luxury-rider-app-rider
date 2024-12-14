import React, { useState } from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Polyline, Marker, Callout } from 'react-native-maps';

import homeMarker from '../../assets/home_marker.png';
import destMarker from '../../assets/dest_marker.png';
import visa from '../../assets/visa.png';
import customMapStyle from '../../mapstyle.json';

import Header from '../../components/Header';
import CarButton from '../../components/CarButton';
import Button from '../../components/Button';
import theme from '../../theme';

import * as S from './styles';
import { TextInput } from 'react-native-paper';
import CardComponent from '../../components/CardComponent';
import { FlatList } from 'react-native';

const Request: React.FC = () => {
  const [selected, setSelected] = useState('economy');

  const [text, setText] = React.useState(" ");

  const navigation = useNavigation();
  
  const carData = [
    { id: '1', name: 'VIP', image: require('../../assets/cars/car5.jpg') },
    { id: '2', name: 'VVIP', image: require('../../assets/cars/car6.jpg') },
    { id: '3', name: 'Corporate', image: require('../../assets/cars/car4.jpg') },
    // Add more car data as needed
  ];

  const renderItem = ({ item }: any) => (
    <CardComponent name={item.name} image={item.image} />
  );
  
  return (
    <S.Container>
      <S.HeaderContainer>
        <Header transparentButton={false} />
      </S.HeaderContainer>
      <S.Map
        region={{
          latitude: -19.920183,
          longitude: -43.936825,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        loadingEnabled
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
      >
        <Polyline
          coordinates={[
            { longitude: -43.935129, latitude: -19.916483 },
            { longitude: -43.935322, latitude: -19.917199 },
            { longitude: -43.935452, latitude: -19.917306 },
            { longitude: -43.935597, latitude: -19.917413 },
            { longitude: -43.936989, latitude: -19.918178 },
            { longitude: -43.938683, latitude: -19.919081 },
            { longitude: -43.937698, latitude: -19.920745 },
            { longitude: -43.938009, latitude: -19.921849 },
            { longitude: -43.938881, latitude: -19.921655 },
          ]}
          strokeColor={theme.color.secondary} // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={4}
        />
        <Marker
          image={homeMarker}
          coordinate={{ latitude: -19.916483, longitude: -43.935129 }}
        >
          <Callout>
          <TextInput
      value={text}
      onChangeText={text => setText(text)}
      placeholder='Bole, Atlas'
    />
          </Callout>
        </Marker>
        <Marker
          image={destMarker}
          coordinate={{ latitude: -19.921655, longitude: -43.938881 }}
        >
          <Callout>
            <Text>Igreja de São José</Text>
          </Callout>
        </Marker>
      </S.Map>

      <S.Bottom>
        <LinearGradient
          colors={['rgba(255,255,255, 0.2)', 'rgba(255,255,255, 0.9)', '#fff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        {/* <S.Options>
          <CarButton
            text="VIP"
            onPress={() => setSelected('economy')}
            active={selected === 'economy'}
          />
          <CarButton
            text="VVIP"
            onPress={() => setSelected('luxury')}
            active={selected === 'luxury'}
          />
          <CarButton
            text="Coorporate"
            onPress={() => setSelected('family')}
            active={selected === 'family'}
          />
        </S.Options> */}
        <S.FlatlistContainer>
          <FlatList
            data={carData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={{ alignItems: 'center' }}
          />
       </S.FlatlistContainer>
       
        <S.CreditCardInfo>
          <S.CreditCardImage source={visa} />
          <S.CreditCardText>•••• 0990</S.CreditCardText>
        </S.CreditCardInfo>
        <Button onPress={() => navigation.navigate('YourRide')}>
          Send Request
        </Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Request;
