import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const BackButton: React.FC = () => (
  <View style={styles.buttonContainer}>
    <IconButton 
      icon="arrow-left" 
      size={24} 
      onPress={() => {/* Handle back navigation */}}
      iconColor="#B80028" // Icon color
      style={styles.iconButton} // Ensure icon is centered
    />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white', 
    borderRadius: 30, 
    marginBottom:10,
    padding: 8, 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 4, 
    width: 48, 
    height: 48, 
    shadowRadius:10,
    // position: 'absolute',
    // bottom: 20,
    // right: 20,
    shadowColor:"#000"
  },
  iconButton: {
    margin: 0, // Remove default margin
  }
});

export default BackButton;
