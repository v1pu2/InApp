import React from 'react';
import {Text, View} from 'react-native';
import SplashIconSvg from '../assets/svgs/SplashIconSvg';

import {styles} from '../theme/CommonStyles';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <SplashIconSvg />
      <Text>Splash SCREEN</Text>
    </View>
  );
};
