import React from 'react';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Navigator from './src/containers/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={'#7555CF'} />
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#7555CF',
  },
});
