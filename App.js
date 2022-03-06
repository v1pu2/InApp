import React from 'react';

import {StatusBar} from 'react-native';
import Navigator from './src/containers/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import colors from './src/theme/colors';
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.color2} />
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
