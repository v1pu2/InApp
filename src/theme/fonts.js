import {Platform} from 'react-native';

// @ts-ignore
const textBoldM = Platform.select({
  ios: () => {
    return {fontFamily: 'Montserrat-Bold', fontWeight: '800'};
  },
  android: () => {
    return {fontFamily: 'Montserrat-Bold'};
  },
})();

// @ts-ignore
const textNormalM = Platform.select({
  ios: () => {
    return {fontFamily: 'Montserrat-Regular', fontWeight: '600'};
  },
  android: () => {
    return {fontFamily: 'Montserrat-Regular'};
  },
})();

export default {
  normalM: {
    ...textNormalM,
  },
  boldM: {
    ...textBoldM,
  },
};
