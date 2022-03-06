import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoaderIconSvg from '../assets/svgs/LoaderIconSvg';
import SplashIconSvg from '../assets/svgs/SplashIconSvg';
import {CONSTANT_VALUE} from '../constants';
import colors from '../theme/colors';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <SplashIconSvg />
      </View>
      <View style={styles.footer}>
        <LoaderIconSvg />
        <Text style={styles.txtCopy}>
          {'\u00A9'} {CONSTANT_VALUE.RESERVE}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.color2,
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
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    color: colors.color1,
    marginTop: 34,
  },
});
