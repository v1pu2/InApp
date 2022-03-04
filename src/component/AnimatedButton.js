import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import fonts from '../theme/fonts';

const AnimatedBUtton = ({onPress, isPrice}) => {
  // Initial scale value of 1 means no scale applied initially.
  const animatedButtonScale = new Animated.Value(1);

  // When button is pressed in, animate the scale to 1.5
  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
    }).start();
  };

  // When button is pressed out, animate the scale back to 1
  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // The animated style for scaling the button within the Animated.View
  const animatedScaleStyle = {
    transform: [{scale: animatedButtonScale}],
  };
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View
        style={[
          styles.priceBtnView,
          animatedScaleStyle,
          {backgroundColor: isPrice ? '#11D0A2' : '#936EFE'},
        ]}>
        {isPrice ? (
          <Text style={styles.txtPrice}>{'{PRICE}'} - I’M IN!</Text>
        ) : (
          <Text style={styles.txtPrice}>Close</Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
export default AnimatedBUtton;
const styles = StyleSheet.create({
  priceBtnView: {
    width: '80%',
    marginHorizontal: 30,
    marginVertical: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  txtPrice: {
    color: 'white',
    ...fonts.normalM,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
  },
});
