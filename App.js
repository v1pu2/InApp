import React from 'react';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Navigator from './src/containers/Navigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#7555CF'} />
      <Navigator />
    </SafeAreaView>
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
