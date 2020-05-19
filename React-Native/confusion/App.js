import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // These are from the react-native library

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically be reloaded.</Text>
    </View>
  );
}

//Inline javascript styles, unlike css script

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
