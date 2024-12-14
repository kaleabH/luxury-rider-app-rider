import React, { useState } from 'react';
import { StyleSheet, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { Button } from 'react-native-paper';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  labelStyle?: TextStyle | TextStyle[];
  height?: number | string;
  width?: number | string;
  fontSize?: number;
  icon?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  labelStyle,
  height, 
  width, 
  fontSize,
  icon
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Button
      mode="contained"
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.button,
        {
          backgroundColor: isPressed ? 'white' : '#B80028',
          borderColor: '#B80028',
          borderWidth: 1,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          // height, // Apply the height prop
          // width,  // Apply the width prop
        },
        style,
      ]}
      labelStyle={[
        {
          color: isPressed ? '#B80028' : 'white',
          fontSize: fontSize || 14, // Use the font size prop or fallback to 18
          fontWeight: 'bold',
        },
        labelStyle,
      ]}
      icon={icon}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 10,
  },
});

export default CustomButton;
