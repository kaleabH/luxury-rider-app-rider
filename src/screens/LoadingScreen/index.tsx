import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const LoadingScreen: React.FC = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const instructions = [
    "Welcome to the app! Let's get started.",
    "Track your trips and earn rewards.",
    "Get the best deals and offers.",
  ];

  const handleNext = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('AuthScreen');
    }
  };

  const handleSkip = () => {
    navigation.navigate('AuthScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/splash10.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.instructionText}>{instructions[currentStep]}</Text>
      <ProgressBar progress={(currentStep + 1) / instructions.length} style={styles.progressBar} />
      <View style={styles.buttonContainer}>
        <Button
          mode="text"
          onPress={handleSkip}
          style={styles.skipButton}
          labelStyle={{ color: '#B80028' }}
        >
          Skip
        </Button>
        <Button
          mode="contained"
          onPress={handleNext}
          buttonColor="#B80028"
          style={styles.nextButton}
        >
          {currentStep < instructions.length - 1 ? 'Next' : 'Get Started'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    height: height * 0.8,
    width: '100%',
    marginBottom: 10,

  },
  instructionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBar: {
    width: '80%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  skipButton: {
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#B80028',
  },
});

export default LoadingScreen;
