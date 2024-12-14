import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

interface BackButtonProps {
  onPress?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <IconButton 
        icon="arrow-left" 
        size={24} 
        onPress={handlePress}
        iconColor="#B80028" // Icon color
        style={styles.iconButton} // Ensure icon is centered
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white', 
    borderRadius: 30, 
    marginBottom: 10,
    padding: 8, 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 4, 
    width: 48, 
    height: 48, 
    shadowRadius: 10,
    shadowColor: "#000"
  },
  iconButton: {
    margin: 0, // Remove default margin
  }
});

export default BackButton;
