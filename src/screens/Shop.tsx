import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabBarProps, TabBarParamsList } from '../../types'
import { TextInput, Button, Avatar } from 'react-native-paper';
// import ShopItem, { Props } from '../components/ShopItem'
// import {items} from "../util/Data"
// interface Props{

// }

const Shop: React.FC<TabBarProps<TabBarParamsList, 'Shop'>> = () => {
  // const [item, setItem] = useState<Props>();
  // useEffect(() => {
   
  //   setItem(items[0])
  // }, [])

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');


  const handleSave = () => {
    // Handle save logic here
    console.log({
      firstName,
      middleName,
      lastName,
      phoneNumber,
      email,
      avatar,
    });
  };

  const handleAvatarChange = () => {
    // Handle avatar change logic here
    console.log('Change Avatar');
  };

  return (
    <ScrollView bounces ={false}>
    <View style={styles.container}>
      <Avatar.Image
        size={100}
        source={require('../assets/avatar.png')} 
        style={styles.avatar}
      />
      <Button mode="contained" style={{width:"50%", alignSelf:"center", marginBottom:10}} buttonColor='#B80028'  onPress={handleAvatarChange}>
        Change Avatar
      </Button>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        label="Middle Name"
        value={middleName}
        onChangeText={setMiddleName}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <Button mode="contained" buttonColor='#B80028' onPress={handleSave}>
        Save Profile
      </Button>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop:90
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
});

export default Shop