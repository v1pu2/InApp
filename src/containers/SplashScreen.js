import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoaderIconSvg from '../assets/svgs/LoaderIconSvg';
import SplashIconSvg from '../assets/svgs/SplashIconSvg';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <SplashIconSvg />
      </View>
      <View style={styles.footer}>
        <LoaderIconSvg />
        <Text style={styles.txtCopy}>
          {'\u00A9'} 2020 Are You In app. All rights reserved
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7555CF',
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    marginBottom: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtCopy: {
    fontFamily: 'Montserrat-Bold',
    // ...fonts.normalM,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    color: 'white',
    marginTop: 34,
  },
});
