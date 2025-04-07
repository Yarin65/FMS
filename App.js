import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FMS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink', // Pink background
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', // White text color
  },
});

export default App;