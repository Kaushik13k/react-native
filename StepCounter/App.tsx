import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Pedometer} from 'expo-sensors';

const App = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('');
  const [stepCount, setStepCount] = useState(0);

  const subscribe = () => {
    const subscription = Pedometer.watchStepCount(result => {
      console.log('Step count updated:', result.steps);
      setStepCount(result.steps);
    });
  };

  var DistanceCovered = (stepCount / 1300).toFixed(4); // in 1km aprox 1300 steps
  var Calories = (DistanceCovered * 60).toFixed(4); // 1km = 60 caloreis burnt

  useEffect(() => {
    subscribe();
    checkPedometerAvailability();
  }, []);

  const checkPedometerAvailability = async () => {
    try {
      const result = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(result));
      if (result) {
        console.log('Pedometer is available.');
      } else {
        console.log('Pedometer is not available on this device.');
      }
    } catch (error) {
      setIsPedometerAvailable(String(error));
      console.error('Error checking pedometer availability:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Is Pedometer available in the sensor: {isPedometerAvailable}</Text>
      <Text>Step count is: {stepCount}</Text>
      <Text>Distance covered: {DistanceCovered} km</Text>
      <Text>Calories burnt: {Calories}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
