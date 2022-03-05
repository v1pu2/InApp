import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import colors from '../theme/colors';

const LoaderView = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size="large" color={colors.color2} />
    </View>
  );
};
export default LoaderView;

const styles = StyleSheet.create({
  loaderView: {flex: 1, justifyContent: 'center'},
});
