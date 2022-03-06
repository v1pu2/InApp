import React from 'react';

import {StatusBar} from 'react-native';
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
