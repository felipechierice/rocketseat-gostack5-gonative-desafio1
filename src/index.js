import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timeline from './components/Timeline';

import './config/ReactotronConfig';

const bgColor = '#f2f2f2';
// #7d42f4

const styles = StyleSheet.create({
  appTitle: {
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    flexDirection: 'column',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.appTitle}>GoNative App</Text>
    <Timeline />
  </View>
);

export default App;
