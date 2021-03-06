
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//SafeAreaView makes sure content doesn't get covered up by the top 'notch'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
